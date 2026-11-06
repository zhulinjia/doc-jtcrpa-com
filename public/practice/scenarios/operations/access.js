const stateKey = 'practice-manual-confirmed';
const gate = document.querySelector('#gate');
const report = document.querySelector('#report');
const entries = [
  ['春日读书会', '¥120.00'],
  ['周末分享会', '¥80.00'],
  ['书签制作课', '¥45.00'],
];

function setReportVisible(visible) {
  gate.hidden = visible;
  report.hidden = !visible;
  report.replaceChildren();
  if (!visible) return;

  const title = document.createElement('h3');
  title.textContent = '练习报表已显示';
  const table = document.createElement('table');
  table.className = 'report-table';
  const head = document.createElement('thead');
  const headerRow = document.createElement('tr');
  for (const label of ['项目名称', '金额']) {
    const cell = document.createElement('th');
    cell.scope = 'col';
    cell.textContent = label;
    headerRow.append(cell);
  }
  head.append(headerRow);
  const body = document.createElement('tbody');
  for (const entry of entries) {
    const row = document.createElement('tr');
    for (const value of entry) {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.append(cell);
    }
    body.append(row);
  }
  table.append(head, body);
  report.append(title, table);
}

document.querySelector('#confirm-access').addEventListener('click', () => {
  sessionStorage.setItem(stateKey, 'yes');
  setReportVisible(true);
});

document.querySelector('#reset-access').addEventListener('click', () => {
  sessionStorage.removeItem(stateKey);
  setReportVisible(false);
});

setReportVisible(sessionStorage.getItem(stateKey) === 'yes');
