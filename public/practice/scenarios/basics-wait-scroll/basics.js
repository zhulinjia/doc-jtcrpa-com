const books = ['山海之间', '城市慢行', '生活的留白'];
const comments = [
  ['林晓', '这本书读起来很轻松。'], ['周宁', '封面颜色很好看。'],
  ['陈果', '适合周末慢慢阅读。'], ['许言', '内容有趣，值得推荐。'],
  ['叶青', '文字温暖，读完心情很好。'], ['夏禾', '故事里的细节让我印象深刻。'],
  ['江舟', '想把这本书分享给朋友。'], ['雨禾', '装帧精致，内容也很喜欢。'],
];

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function startLookup() {
  const button = document.querySelector('#lookup');
  const area = document.querySelector('#lookup-area');
  button.addEventListener('click', () => {
    button.disabled = true;
    const loading = make('p', 'status-text', '正在加载');
    loading.id = 'loading';
    area.replaceChildren(loading);
    window.setTimeout(() => {
      const table = make('table', 'book-table');
      const head = document.createElement('thead');
      const header = document.createElement('tr');
      for (const title of ['书名', '状态']) {
        const cell = make('th', '', title);
        cell.scope = 'col';
        header.append(cell);
      }
      head.append(header);
      const body = document.createElement('tbody');
      for (const book of books) {
        const row = document.createElement('tr');
        row.append(make('td', '', book), make('td', '', '可借阅'));
        body.append(row);
      }
      table.append(head, body);
      area.replaceChildren(table);
      button.disabled = false;
      button.textContent = '重新查询';
    }, 1800);
  });
}

function startComments() {
  const box = document.querySelector('#comment-box');
  const list = document.querySelector('#comments');
  const count = document.querySelector('#comment-count');
  const status = document.querySelector('#comment-status');
  let loaded = 0;
  let loading = false;

  function appendBatch() {
    for (const [name, text] of comments.slice(loaded, loaded + 4)) {
      const card = make('article', 'comment-card');
      card.append(make('h3', 'comment-name', name), make('p', 'comment-text', text));
      list.append(card);
    }
    loaded = Math.min(loaded + 4, comments.length);
    count.textContent = `已显示 ${loaded} / ${comments.length} 条`;
    status.textContent = loaded === comments.length ? '没有更多评论了' : '向下滚动查看更多评论';
  }

  box.addEventListener('scroll', () => {
    if (loading || loaded >= comments.length || box.scrollTop + box.clientHeight < box.scrollHeight - 8) return;
    loading = true;
    status.textContent = '正在加载更多评论…';
    window.setTimeout(() => { appendBatch(); loading = false; }, 500);
  }, { passive: true });
  appendBatch();
}

if (document.body.dataset.scenario === 'disappear') startLookup();
if (document.body.dataset.scenario === 'container') startComments();
