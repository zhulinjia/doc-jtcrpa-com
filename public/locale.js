(() => {
  if (window.self !== window.top) return;

  const preferenceKey = 'jtcrpa-docs-language';
  const read = (storage, key) => {
    try { return window[storage].getItem(key); } catch { return null; }
  };
  const write = (storage, key, value) => {
    try { window[storage].setItem(key, value); } catch { /* Language switching also works without storage. */ }
  };
  let preference = read('localStorage', preferenceKey);
  if (preference !== 'zh' && preference !== 'en') preference = null;

  document.addEventListener('click', event => {
    const link = event.target instanceof Element
      ? event.target.closest('.VPNavTranslations a, .practice-language-switch')
      : null;
    if (!link) return;
    const target = new URL(link.href, location.href);
    if (target.origin !== location.origin) return;
    preference = /^\/en(?:\/|$)/.test(target.pathname) ? 'en' : 'zh';
    write('localStorage', preferenceKey, preference);
  }, true);

  function showLanguage(language) {
    const target = new URL(location.href);
    const english = /^\/en(?:\/|$)/.test(target.pathname);
    if (english === (language === 'en')) return;
    const path = target.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
    target.pathname = language === 'en' ? '/en' + path : path;
    const filters = [['城市', 'City'], ['文学', 'Literature'], ['旅行', 'Travel'], ['生活', 'Lifestyle']];
    for (const name of ['q', 'category']) {
      const value = target.searchParams.get(name);
      const match = filters.find(pair => pair[english ? 1 : 0].toLocaleLowerCase() === value?.toLocaleLowerCase());
      if (match) target.searchParams.set(name, match[english ? 0 : 1]);
    }
    location.replace(target.href);
  }

  if (preference) {
    showLanguage(preference);
    return;
  }

  const browserLanguage = navigator.languages?.[0] || navigator.language || 'en';
  showLanguage(/^zh(?:-|$)/i.test(browserLanguage) ? 'zh' : 'en');
})();
