const form = document.querySelector('#practice-form');
const result = document.querySelector('#submit-result');
const details = document.querySelector('#submit-details');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const entries = [
    ['称呼', data.get('name')],
    ['咨询主题', data.get('topic')],
    ['回复方式', data.get('reply')],
    ['其他要求', data.has('urgent') ? '加急处理' : '无'],
    ['咨询内容', data.get('message')],
  ];
  details.replaceChildren();
  for (const [label, value] of entries) {
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = label;
    description.textContent = String(value ?? '');
    details.append(term, description);
  }
  result.hidden = false;
});

form.addEventListener('reset', () => {
  result.hidden = true;
  details.replaceChildren();
});
