const REVIEWS = [
  { name: '林晓', rating: '5 星', text: '书的装帧很精致，读起来很舒服。' },
  { name: '周宁', rating: '4 星', text: '故事温暖，适合在周末慢慢读。' },
  { name: '陈果', rating: '5 星', text: '文字很有画面感，读完还想再看。' },
  { name: '许言', rating: '4 星', text: '内容轻松，通勤路上读正合适。' },
  { name: '叶青', rating: '5 星', text: '选题很有趣，里面有不少新发现。' },
  { name: '夏禾', rating: '4 星', text: '文字简单清楚，封面颜色也很好看。' },
  { name: '江舟', rating: '5 星', text: '读完有一种去旅行的冲动。' },
  { name: '何心', rating: '4 星', text: '适合送给喜欢阅读的朋友。' },
  { name: '苏木', rating: '5 星', text: '细节写得认真，让人很有共鸣。' },
  { name: '顾遥', rating: '4 星', text: '节奏不快，很适合睡前阅读。' },
  { name: '方圆', rating: '5 星', text: '一本值得收藏的轻松读物。' },
  { name: '雨禾', rating: '4 星', text: '包装整洁，内容也很符合期待。' },
];

const ORDERS = [
  { number: 'DD1001', product: '山海之间', amount: '¥32.00' },
  { number: 'DD1002', product: '城市慢行', amount: '¥45.00' },
  { number: 'DD1003', product: '生活的留白', amount: '¥39.00' },
  { number: 'DD1004', product: '星星邮局', amount: '¥33.80' },
];

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function startReviews(mode) {
  const list = document.querySelector('#reviews');
  const count = document.querySelector('#count');
  const status = document.querySelector('#load-status');
  const button = document.querySelector('#load-more');
  let loaded = 0;
  let loading = false;

  function appendBatch() {
    const batch = REVIEWS.slice(loaded, loaded + 4);
    for (const review of batch) {
      const card = element('article', 'review-card');
      const heading = element('div', 'review-heading');
      heading.append(element('h3', 'review-name', review.name), element('span', 'review-rating', review.rating));
      card.append(heading, element('p', 'review-text', review.text));
      list.append(card);
    }
    loaded += batch.length;
    count.textContent = `已显示 ${loaded} / ${REVIEWS.length} 条`;
    const done = loaded >= REVIEWS.length;
    status.textContent = done ? '没有更多评论了' : mode === 'scroll' ? '向下滚动，查看更多评论' : '';
    if (button) {
      button.hidden = done;
      button.disabled = false;
      button.textContent = '加载更多评论';
    }
    return done;
  }

  function loadMore() {
    if (loading || loaded >= REVIEWS.length) return;
    loading = true;
    status.textContent = '正在加载更多评论…';
    if (button) {
      button.disabled = true;
      button.textContent = '正在加载…';
    }
    window.setTimeout(() => {
      const done = appendBatch();
      loading = false;
      if (done && observer) observer.disconnect();
    }, 800);
  }

  let observer;
  appendBatch();
  if (mode === 'more') {
    button.addEventListener('click', loadMore);
  } else {
    const sentinel = document.querySelector('#scroll-sentinel');
    let hasScrolled = false;
    observer = new IntersectionObserver((entries) => {
      if (hasScrolled && entries.some((entry) => entry.isIntersecting)) loadMore();
    }, { rootMargin: '0px 0px 100px 0px' });
    observer.observe(sentinel);
    window.addEventListener('scroll', () => {
      hasScrolled = true;
      if (sentinel.getBoundingClientRect().top <= window.innerHeight + 100) loadMore();
    }, { passive: true });
  }
}

function startOrders() {
  const button = document.querySelector('#load-orders');
  const status = document.querySelector('#order-status');
  const content = document.querySelector('#order-content');
  button.addEventListener('click', () => {
    button.disabled = true;
    status.textContent = '订单正在加载，请稍等…';
    content.replaceChildren();
    window.setTimeout(() => {
      const wrap = element('div', 'table-scroll');
      const table = element('table', 'order-table');
      const head = element('thead');
      const header = element('tr');
      for (const label of ['订单编号', '商品', '金额']) header.append(element('th', '', label));
      head.append(header);
      const body = element('tbody');
      for (const order of ORDERS) {
        const row = element('tr');
        row.append(element('td', '', order.number), element('td', '', order.product), element('td', '', order.amount));
        body.append(row);
      }
      table.append(head, body);
      wrap.append(table);
      content.append(wrap);
      status.textContent = '订单加载完成，共 4 条';
      button.textContent = '重新加载订单';
      button.disabled = false;
    }, 2200);
  });
}

const scenario = document.body.dataset.scenario;
if (scenario === 'scroll' || scenario === 'more') startReviews(scenario);
if (scenario === 'loading') startOrders();
