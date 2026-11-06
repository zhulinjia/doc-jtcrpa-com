const loadButton = document.querySelector('#load-orders');
const resetButton = document.querySelector('#reset-orders');
const status = document.querySelector('#order-status');
const result = document.querySelector('#order-result');
const rows = document.querySelector('#order-rows');
let requestId = 0;

loadButton.addEventListener('click', async () => {
  const currentRequest = ++requestId;
  loadButton.disabled = true;
  status.textContent = '正在加载订单…';
  rows.replaceChildren();
  result.hidden = true;
  try {
    const response = await fetch('./orders.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('无法加载订单');
    const orders = await response.json();
    if (currentRequest !== requestId) return;
    for (const order of orders) {
      const row = document.createElement('tr');
      for (const field of ['订单编号', '商品名称', '金额']) {
        const cell = document.createElement('td');
        cell.textContent = order[field];
        row.append(cell);
      }
      rows.append(row);
    }
    result.hidden = false;
    status.textContent = `已加载 ${orders.length} 条订单。`;
  } catch {
    if (currentRequest === requestId) status.textContent = '订单加载失败，请检查网络后重试。';
  } finally {
    if (currentRequest === requestId) loadButton.disabled = false;
  }
});

resetButton.addEventListener('click', () => {
  requestId += 1;
  loadButton.disabled = false;
  rows.replaceChildren();
  result.hidden = true;
  status.textContent = '还没有加载订单。';
});
