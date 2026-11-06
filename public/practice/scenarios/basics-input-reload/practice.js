if (document.body.dataset.scenario === 'tab') {
  const name = document.querySelector('#reader-name');
  const result = document.querySelector('#name-result');
  name.addEventListener('blur', () => {
    const value = name.value.trim();
    result.textContent = value ? `姓名已确认：${value}` : '尚未检查姓名。';
  });
  document.querySelector('#reset-name').addEventListener('click', () => {
    name.value = '';
    result.textContent = '尚未检查姓名。';
  });
}

if (document.body.dataset.scenario === 'reload') {
  const key = 'practice-message-status';
  const status = document.querySelector('#message-status');
  const hint = document.querySelector('#update-hint');
  if (sessionStorage.getItem(key) === 'pending') sessionStorage.setItem(key, 'updated');
  if (sessionStorage.getItem(key) === 'updated') status.textContent = '已收到新消息。';
  document.querySelector('#prepare-update').addEventListener('click', () => {
    sessionStorage.setItem(key, 'pending');
    hint.textContent = '更新已准备好，请刷新页面。';
  });
  document.querySelector('#reset-update').addEventListener('click', () => {
    sessionStorage.removeItem(key);
    location.reload();
  });
}
