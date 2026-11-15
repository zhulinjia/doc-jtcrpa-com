import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { englishLessons } from '../.vitepress/i18n/lessons.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'public/practice');
const destination = path.join(root, 'public/en/practice');
const messagesPath = path.join(root, '.vitepress/i18n/practice-en.json');
const lessonsPath = path.join(root, '.vitepress/i18n/lessons-en.json');

function filesIn(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(file) : [file];
  });
}

function writeChanged(file, content) {
  if (fs.existsSync(file) && fs.readFileSync(file).equals(Buffer.from(content))) return;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

export function localizePractice() {
  const sourceLessons = JSON.parse(fs.readFileSync(path.join(source, 'lessons.json'), 'utf8'));
  const lessonMessages = JSON.parse(fs.readFileSync(lessonsPath, 'utf8'));
  const translations = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));
  for (const lesson of sourceLessons) {
    for (const field of ['title', 'request', 'expected']) {
      if (lesson[field]) translations[lesson[field]] = lessonMessages[lesson.id]?.[field];
    }
  }
  for (const [original, translated] of Object.entries(translations)) {
    if (typeof translated !== 'string') throw new Error(`Missing English practice text: ${original}`);
  }
  const replacements = Object.entries(translations).sort(([a], [b]) => b.length - a.length);
  const localizedLessons = englishLessons(sourceLessons, lessonMessages);
  const textExtensions = new Set(['.html', '.js', '.json', '.css', '.svg', '.csv', '.txt']);
  for (const file of filesIn(source)) {
    const relative = path.relative(source, file);
    const target = path.join(destination, relative);
    if (relative === 'lessons.json') {
      writeChanged(target, JSON.stringify(localizedLessons, null, 2) + '\n');
      continue;
    }
    if (!textExtensions.has(path.extname(file))) {
      writeChanged(target, fs.readFileSync(file));
      continue;
    }
    let content = fs.readFileSync(file, 'utf8');
    if (relative !== 'language.js') {
      for (const [original, translated] of replacements) content = content.replaceAll(original, translated);
    }
    content = content
      .replace(/lang="zh-CN"/g, 'lang="en"')
      .replace(/(["'`])\/(guide|tutorial|data|automation|advanced|settings|tools|troubleshooting|practice)(?=\/)/g, '$1/en/$2')
      .replaceAll('《', '').replaceAll('》', '')
      .replaceAll('「', '“').replaceAll('」', '”')
      .replaceAll('，', ', ').replaceAll('。', '.').replaceAll('、', ', ')
      .replaceAll('；', '; ').replaceAll('：', ': ').replaceAll('？', '?')
      .replaceAll('（', ' (').replaceAll('）', ')');
    if (relative !== 'language.js') {
      const visible = content.replace(/<!--[\s\S]*?-->/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
      const missing = visible.split('\n').find(line => /\p{Script=Han}/u.test(line));
      if (missing) throw new Error(`Untranslated English practice content in ${relative}: ${missing.trim()}`);
    }
    if (file.endsWith('.js')) new vm.Script(content, { filename: target });
    if (file.endsWith('.json')) JSON.parse(content);
    writeChanged(target, content);
  }
  return localizedLessons;
}

export function practiceLocaleWatcher() {
  return {
    name: 'practice-locales',
    configureServer(server) {
      server.watcher.add([source, messagesPath, lessonsPath]);
      const synchronize = file => {
        const absolute = path.resolve(file);
        if (!absolute.startsWith(source + path.sep) && absolute !== messagesPath && absolute !== lessonsPath) return;
        try {
          localizePractice();
        } catch (error) {
          server.config.logger.error(error.message);
          server.ws.send({ type: 'error', err: { message: error.message, stack: error.stack } });
        }
      };
      server.watcher.on('change', synchronize);
      server.watcher.on('add', synchronize);
      server.httpServer?.once('close', () => {
        server.watcher.off('change', synchronize);
        server.watcher.off('add', synchronize);
      });
    }
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const lessons = localizePractice();
  console.log(`Generated English practice pages and ${lessons.length} lessons.`);
}
