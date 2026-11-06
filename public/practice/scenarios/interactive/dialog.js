const orderDialog = document.querySelector('#order-dialog');
document.querySelector('#open-detail').addEventListener('click', () => orderDialog.showModal());
document.querySelector('#close-detail').addEventListener('click', () => orderDialog.close());
