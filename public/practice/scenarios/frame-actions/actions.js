if (document.body.dataset.scenario === 'click') {
  document.querySelector('#show-tracking').addEventListener('click', () => {
    document.querySelector('#tracking-result').hidden = false;
  });
}

if (document.body.dataset.scenario === 'form') {
  const form = document.querySelector('#pickup-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const result = document.querySelector('#pickup-result');
    result.querySelector('.result-name').textContent = String(data.get('name') ?? '');
    result.querySelector('.result-method').textContent = String(data.get('method') ?? '');
    result.querySelector('.result-note').textContent = String(data.get('note') ?? '');
    result.hidden = false;
  });
}
