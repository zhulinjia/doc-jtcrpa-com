(() => {
  const scriptUrl = document.currentScript?.src;
  if (!scriptUrl) return;
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = new URL('learning.css', scriptUrl).href;
  document.head.append(stylesheet);
  fetch(new URL('lessons.json', scriptUrl))
    .then(response => { if (!response.ok) throw new Error('Lesson list unavailable'); return response.json(); })
    .then(lessons => {
      const url = new URL(location.href);
      const requested = url.searchParams.get('lesson');
      const isBook = /\/practice\/(index|detail)\.html$/.test(url.pathname);
      const lesson = isBook
        ? lessons.find(item => item.id === (requested || 'first'))
        : lessons.find(item => new URL(item.path, url.origin).pathname === url.pathname);
      let doc = lesson?.doc;
      if (!doc && /\/scenarios\/basics-/.test(url.pathname)) {
        const anchors = { click:'click', search:'search', choices:'choices', disappear:'wait', container:'scroll', tabs:'tabs', conditions:'conditions', tab:'tab', reload:'reload', target:'target', links:'links' };
        const key = url.pathname.split('/').pop().replace('.html','');
        doc = '/guide/basic-practice.html#' + (anchors[key] || 'click');
      }
      if (!doc && /\/scenarios\/frame-/.test(url.pathname)) {
        const key = url.pathname.split('/').pop().replace('.html','');
        doc = '/guide/frame-practice.html#' + ({click:'click',form:'form',parallel:'parallel',nested:'nested',index:'cross'}[key] || 'extract');
      }
      if (!doc && /\/scenarios\/operations\/assets\.html$/.test(url.pathname)) doc = '/tools/extract-tools.html#images';
      if (!doc && /\/scenarios\/operations\/access\.html$/.test(url.pathname)) doc = '/tutorial/login-captcha.html';
      if (!doc) return;

      document.querySelectorAll('a[href*="guide/first-task"]').forEach(link => {
        link.href = doc;
        link.textContent = '查看本课教程 ↗';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      });
      if (!document.querySelector('a[href="' + doc + '"]')) {
        const help = document.createElement('p');
        help.className = 'lesson-doc-link';
        const link = document.createElement('a');
        link.href = doc; link.target = '_blank'; link.rel = 'noopener noreferrer';
        link.textContent = '查看本课教程 ↗';
        help.append(link);
        document.querySelector('main')?.append(help);
      }

      if (lesson?.request) {
        const request = document.querySelector('#first-task-request, main blockquote');
        if (request) request.textContent = lesson.request;
      }
      if (isBook && lesson) {
        const title = document.querySelector('#page-title');
        if (title) title.textContent = lesson.title;
        const result = document.querySelector('#lesson-result');
        if (result) result.textContent = '运行结束后，在「数据存储」点击「预览」。' + lesson.expected + ' 核对后可点击「下载」选择 Excel。';
        document.querySelectorAll('a[href="./index.html"]').forEach(link => {
          if (lesson.id !== 'first') link.href = './index.html?lesson=' + encodeURIComponent(lesson.id);
        });
        if (lesson.id !== 'first') {
          const eyebrow = document.querySelector('.eyebrow');
          if (eyebrow) eyebrow.textContent = '配套练习 · ' + lesson.title;
          document.querySelectorAll('form').forEach(form => {
            const input = document.createElement('input');
            input.type = 'hidden'; input.name = 'lesson'; input.value = lesson.id; form.append(input);
          });
          const hint = document.querySelector('#first-page-hint');
          if (hint) hint.firstChild.textContent = '开始本次练习前，请先';
        }
        if (lesson.id === 'file-list') {
          const intro = document.querySelector('.intro-description');
          if (intro) intro.textContent = '先点击书架上方的“下载练习清单”，把文件添加到扩展对话，再发送下面的需求。';
        }
      }
      document.querySelectorAll('main blockquote').forEach(quote => {
        if (quote.id === 'first-task-request' || quote.nextElementSibling?.classList.contains('lesson-copy')) return;
        const row = document.createElement('div'); row.className = 'lesson-copy';
        const button = document.createElement('button'); button.type = 'button'; button.textContent = '复制这句话';
        const status = document.createElement('span'); status.setAttribute('role','status'); status.setAttribute('aria-live','polite');
        button.addEventListener('click', async () => {
          button.disabled = true; status.textContent = '';
          try { await navigator.clipboard.writeText(quote.textContent.trim()); status.textContent = '已复制，去扩展中粘贴并发送。'; }
          catch { status.textContent = '未能复制，请选中文字手动复制。'; }
          finally { button.disabled = false; }
        });
        row.append(button,status); quote.after(row);
      });
    })
    .catch(() => { /* 原页面的练习内容仍可直接阅读。 */ });
})();
