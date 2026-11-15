import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { localizePractice } from './localize-practice.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const directories = ['guide', 'tutorial', 'data', 'automation', 'advanced', 'settings', 'tools', 'troubleshooting'];
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const documents = ['index.md', ...directories.flatMap(directory => fs.readdirSync(path.join(root, directory)).filter(file => file.endsWith('.md')).map(file => directory + '/' + file))];
const lessons = localizePractice();

for (const relative of documents) {
  const file = path.join(root, 'en', relative);
  if (!fs.existsSync(file)) { failures.push(`Missing English document: ${relative}`); continue; }
  const content = fs.readFileSync(file, 'utf8');
  check(/layout: doc/.test(content), `English document must use doc layout: ${relative}`);
  const visible = content.replace(/<!--[\s\S]*?-->/g, '').replace(/\{#[^}]+\}/g, '').replace(/<[^>]+>/g, '').replace(/\]\([^)]*\)/g, ']');
  check(!/\p{Script=Han}/u.test(visible), `Untranslated English document: ${relative}`);
  for (const match of content.matchAll(/(?:\]\(|href=")\/(guide|tutorial|data|automation|advanced|settings|tools|troubleshooting|practice)\//g)) {
    failures.push(`English document links outside its locale: ${relative} (${match[0]})`);
  }
}

const expectedRequests = {
  first: 'Collect the book titles and prices on this page',
  pagination: 'Collect the book titles and prices from the first two pages',
  search: 'Search for “City” and collect the matching book titles and prices',
  scroll: 'Collect each review, including the reviewer, rating, and review text'
};
for (const [id, request] of Object.entries(expectedRequests)) {
  check(lessons.find(lesson => lesson.id === id)?.request === request, `Wrong English request: ${id}`);
}
for (const lesson of lessons) {
  check(lesson.doc.startsWith('/en/') && lesson.path.startsWith('/en/practice/'), `Wrong English lesson route: ${lesson.id}`);
  check(fs.existsSync(path.join(root, 'public', lesson.path.split('?')[0].slice(1))), `Missing English practice page: ${lesson.id}`);
}

function filesIn(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(file) : [file];
  });
}

let builtPages = 0, localLinks = 0;
if (process.argv.includes('--built')) {
  const dist = path.join(root, '.vitepress/dist');
  const html = new Map(filesIn(dist).filter(file => file.endsWith('.html')).map(file => [file, fs.readFileSync(file, 'utf8')]));
  const ids = new Map([...html].map(([file, content]) => [file, new Set([...content.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))]));
  for (const [file, content] of html) {
    builtPages++;
    const relative = path.relative(dist, file).replaceAll('\\', '/');
    if (relative.startsWith('en/')) check(/<html[^>]*lang="en(?:-US)?"/.test(content), `Wrong English page language: ${relative}`);
    for (const match of content.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      const href = match[1].replaceAll('&amp;', '&');
      if (!href || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) continue;
      const url = new URL(href, 'http://docs.test/' + relative);
      let target = path.join(dist, decodeURIComponent(url.pathname).replace(/^\//, ''));
      if (!fs.existsSync(target) || fs.statSync(target).isDirectory()) {
        target = [target + '.html', path.join(target, 'index.html')].find(candidate => fs.existsSync(candidate)) || target;
      }
      localLinks++;
      if (!fs.existsSync(target) || fs.statSync(target).isDirectory()) {
        failures.push(`Broken local reference: ${relative} -> ${href}`);
      } else if (url.hash && ids.has(target)) {
        check(ids.get(target).has(decodeURIComponent(url.hash.slice(1))), `Missing anchor: ${relative} -> ${href}`);
      }
    }
  }
  for (const relative of documents) {
    check(fs.existsSync(path.join(dist, 'en', relative.replace(/\.md$/, '.html'))), `English page missing from build: ${relative}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`i18n checks passed: ${documents.length} English documents, ${lessons.length} English lessons` + (builtPages ? `, ${builtPages} built pages, ${localLinks} local references` : '') + '.');
}
