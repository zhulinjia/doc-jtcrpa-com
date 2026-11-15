(() => {
  const automaticLanguage = document.createElement('script');
  automaticLanguage.src = '/locale.js';
  document.head.append(automaticLanguage);

  const header = document.querySelector('.site-header .header-inner');
  if (!header) return;
  const english = document.documentElement.lang.startsWith('en');
  const link = document.createElement('a');
  link.className = 'practice-language-switch';
  link.lang = english ? 'zh-CN' : 'en';
  link.hreflang = link.lang;
  link.textContent = english ? '简体中文' : 'English';
  link.setAttribute('aria-label', english ? 'Switch to Simplified Chinese' : '切换为英文');
  const target = new URL(location.href);
  target.pathname = english ? target.pathname.replace(/^\/en(?=\/)/, '') : '/en' + target.pathname;
  const filters = [['城市', 'City'], ['文学', 'Literature'], ['旅行', 'Travel'], ['生活', 'Lifestyle']];
  for (const name of ['q', 'category']) {
    const value = target.searchParams.get(name);
    const match = filters.find(pair => pair[english ? 1 : 0].toLocaleLowerCase() === value?.toLocaleLowerCase());
    if (match) target.searchParams.set(name, match[english ? 0 : 1]);
  }
  link.href = target.pathname + target.search + target.hash;
  header.append(link);
})();
