const stockUnavailable = new URLSearchParams(window.location.search).get('stock') === 'out';
const stockStatus = document.querySelector('#stock-status');
const stockActive = document.querySelector(stockUnavailable ? '#set-unavailable' : '#set-available');
stockStatus.textContent = stockUnavailable ? '缺货' : '有货';
stockActive.setAttribute('aria-current', 'true');
