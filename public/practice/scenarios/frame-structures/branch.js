const branches = {
  east: { name: '东区门店', rows: [['东区门店', 'E1001', '¥32.00'], ['东区门店', 'E1002', '¥45.00']] },
  west: { name: '西区门店', rows: [['西区门店', 'W2001', '¥39.00'], ['西区门店', 'W2002', '¥28.50']] },
};
const branch = branches[new URLSearchParams(window.location.search).get('store')];
const branchName = document.querySelector('#branch-name');
const branchButton = document.querySelector('#show-orders');
const branchStatus = document.querySelector('#branch-status');
const branchTable = document.querySelector('#branch-table');

if (!branch) {
  branchName.textContent = '没有找到门店';
  branchStatus.textContent = '请回到练习页面重新打开。';
  branchButton.hidden = true;
} else {
  document.title = branch.name;
  branchName.textContent = branch.name;
  branchButton.addEventListener('click', () => {
    const body = branchTable.querySelector('tbody');
    body.replaceChildren();
    for (const values of branch.rows) {
      const row = document.createElement('tr');
      for (const value of values) {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.append(cell);
      }
      body.append(row);
    }
    branchTable.hidden = false;
    branchStatus.textContent = `已显示 ${branch.rows.length} 条订单。`;
  });
}
