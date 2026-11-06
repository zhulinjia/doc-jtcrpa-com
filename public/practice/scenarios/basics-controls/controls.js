const scenario = document.body.dataset.scenario;

if (scenario === 'click') {
  const claim = document.querySelector('#claim');
  const status = document.querySelector('#claim-status');
  claim.addEventListener('click', () => { status.textContent = '已领取书签。'; claim.disabled = true; });
  document.querySelector('#reset').addEventListener('click', () => { status.textContent = '尚未领取书签。'; claim.disabled = false; });
}

if (scenario === 'search') {
  const form = document.querySelector('#search-form');
  const result = document.querySelector('#search-result');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.querySelector('#keyword').value.trim();
    result.textContent = query && '城市慢行'.includes(query) ? '搜索结果：城市慢行 · ¥45.00' : '没有找到相关书籍。';
    result.hidden = false;
  });
  form.addEventListener('reset', () => { result.hidden = true; result.textContent = ''; });
}

if (scenario === 'choices') {
  const category = document.querySelector('#category');
  const categoryStatus = document.querySelector('#category-status');
  const pickupStatus = document.querySelector('#pickup-status');
  const reminder = document.querySelector('#email-reminder');
  const reminderStatus = document.querySelector('#reminder-status');
  const updateCategory = () => { categoryStatus.textContent = `当前分类：${category.selectedOptions[0].textContent}`; };
  const updatePickup = () => { pickupStatus.textContent = `当前方式：${document.querySelector('input[name="pickup"]:checked').value}`; };
  const updateReminder = () => { reminderStatus.textContent = reminder.checked ? '提醒已开启' : '提醒已关闭'; };
  category.addEventListener('change', updateCategory);
  document.querySelectorAll('input[name="pickup"]').forEach((input) => input.addEventListener('change', updatePickup));
  reminder.addEventListener('change', updateReminder);
  document.querySelector('#reset-category').addEventListener('click', () => { category.value = ''; updateCategory(); });
  document.querySelector('#reset-pickup').addEventListener('click', () => { document.querySelector('input[name="pickup"][value="快递配送"]').checked = true; updatePickup(); });
  document.querySelector('#reset-reminder').addEventListener('click', () => { reminder.checked = true; updateReminder(); });
}
