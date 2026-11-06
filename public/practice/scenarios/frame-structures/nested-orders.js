const button = document.querySelector('#show-orders');
button.addEventListener('click', () => {
  document.querySelector('#order-table').hidden = false;
  document.querySelector('#order-status').textContent = '已显示 3 条订单。';
});
