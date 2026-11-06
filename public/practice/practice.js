const BOOKS = [
  { id: 'book-01', title: '山海之间', author: '林见', category: '文学', price: '¥32.00', description: '一组关于远方与归途的短篇故事，写给喜欢在文字里寻找风景的人。', color: 'sage', number: '01' },
  { id: 'book-02', title: '城市慢行', author: '周宁', category: '旅行', price: '¥45.00', description: '沿着街巷慢慢行走，记录城市里那些容易被忽略的小小美好。', color: 'apricot', number: '02' },
  { id: 'book-03', title: '生活的留白', author: '云舒', category: '生活', price: '¥39.00', description: '从整理房间到照顾自己，在平凡的日子里留一点从容的空间。', color: 'lavender', number: '03' },
  { id: 'book-04', title: '月光落在书页上', author: '许知', category: '文学', price: '¥28.50', description: '十二篇温柔的散文，讲述夜晚、阅读和人与人之间细小的牵挂。', color: 'blue', number: '04' },
  { id: 'book-05', title: '旅途中的小地图', author: '陈远', category: '旅行', price: '¥48.00', description: '一张张手绘地图串起旅途见闻，带你发现目的地之外的风景。', color: 'coral', number: '05' },
  { id: 'book-06', title: '一间自己的小厨房', author: '林夏', category: '生活', price: '¥36.00', description: '用当季食材做简单的一日三餐，让下厨成为轻松愉快的日常。', color: 'cream', number: '06' },
  { id: 'book-07', title: '风经过的地方', author: '谢遥', category: '文学', price: '¥42.00', description: '几位老朋友在小镇重逢，重新讲起那些被时间珍藏的往事。', color: 'rose', number: '07' },
  { id: 'book-08', title: '周末去看海', author: '夏一', category: '旅行', price: '¥35.00', description: '为短途旅行准备的一本随手读物，收录海边散步与沿途见闻。', color: 'mint', number: '08' },
  { id: 'book-09', title: '给植物写封信', author: '青禾', category: '生活', price: '¥30.00', description: '从第一盆绿植开始，记录浇水、发芽和等待花开的日子。', color: 'sage', number: '09' },
  { id: 'book-10', title: '星星邮局', author: '何冬', category: '文学', price: '¥33.80', description: '一家只在夜晚营业的邮局，收藏着来自不同地方的温暖信件。', color: 'lavender', number: '10' },
  { id: 'book-11', title: '山路上的早餐', author: '程野', category: '旅行', price: '¥46.00', description: '走过山间小路，也记下旅途中遇到的早餐和热情的人们。', color: 'apricot', number: '11' },
  { id: 'book-12', title: '手作的时间', author: '苏木', category: '生活', price: '¥38.00', description: '从纸张、针线和木片出发，为普通的一天做几件有趣的小东西。', color: 'blue', number: '12' },
];

const PAGE_SIZE = 4;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function bookUrl(book) {
  const url = new URL('./detail.html', window.location.href);
  url.search = new URLSearchParams({ id: book.id }).toString();
  return url.href;
}

function cover(book, large = false) {
  const node = element('div', `book-cover cover-${book.color}${large ? ' cover-large' : ''}`);
  node.setAttribute('aria-hidden', 'true');
  node.append(element('span', 'cover-number', `BOOK ${book.number}`));
  node.append(element('span', 'cover-title', book.title));
  node.append(element('span', 'cover-decoration'));
  node.append(element('span', 'cover-author', book.author));
  return node;
}

function pageUrl(params, page) {
  const url = new URL('./index.html', window.location.href);
  if (params.get('q')) url.searchParams.set('q', params.get('q'));
  if (params.get('category')) url.searchParams.set('category', params.get('category'));
  if (page > 1) url.searchParams.set('page', String(page));
  return url.href;
}

function renderList() {
  const params = new URLSearchParams(window.location.search);
  const query = (params.get('q') || '').trim();
  const category = params.get('category') || '';
  document.querySelector('#keyword').value = query;
  document.querySelector('#category').value = category;

  const normalized = query.toLocaleLowerCase();
  const matches = BOOKS.filter((book) => {
    const searchable = `${book.title} ${book.author} ${book.category}`.toLocaleLowerCase();
    return (!normalized || searchable.includes(normalized)) && (!category || book.category === category);
  });
  const pageCount = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  const requestedPage = Number(params.get('page'));
  const page = Number.isInteger(requestedPage) && requestedPage > 0 ? Math.min(requestedPage, pageCount) : 1;
  const visible = matches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const grid = document.querySelector('#books');

  visible.forEach((book) => {
    const card = element('article', 'book-card');
    const imageLink = element('a', 'cover-link');
    imageLink.href = bookUrl(book);
    imageLink.setAttribute('aria-label', `查看《${book.title}》详情`);
    imageLink.append(cover(book));
    const content = element('div', 'book-content');
    content.append(element('span', 'book-category', book.category));
    const title = element('h3', 'book-heading');
    const titleLink = element('a', 'book-title', book.title);
    titleLink.href = bookUrl(book);
    title.append(titleLink);
    content.append(title, element('p', 'book-author', `作者：${book.author}`));
    const bottom = element('div', 'book-bottom');
    const detailLink = element('a', 'book-detail-link', '查看详情 →');
    detailLink.href = bookUrl(book);
    bottom.append(element('span', 'book-price', book.price), detailLink);
    content.append(bottom);
    card.append(imageLink, content);
    grid.append(card);
  });

  document.querySelector('#result-count').textContent = `共 ${matches.length} 本书 · 第 ${page} / ${pageCount} 页`;
  document.querySelector('#empty-state').hidden = matches.length > 0;
  document.querySelector('#clear-filters').hidden = !(query || category);
  const pagination = document.querySelector('#pagination');
  if (pageCount > 1) {
    if (page > 1) {
      const previous = element('a', 'page-arrow', '← 上一页');
      previous.href = pageUrl(params, page - 1);
      pagination.append(previous);
    }
    for (let index = 1; index <= pageCount; index += 1) {
      const link = element('a', `page-number${index === page ? ' is-current' : ''}`, String(index));
      link.href = pageUrl(params, index);
      link.setAttribute('aria-label', `第 ${index} 页`);
      if (index === page) link.setAttribute('aria-current', 'page');
      pagination.append(link);
    }
    if (page < pageCount) {
      const next = element('a', 'page-arrow', '下一页 →');
      next.href = pageUrl(params, page + 1);
      pagination.append(next);
    }
  }

  const csv = `\ufeff网址\r\n${BOOKS.slice(0, 2).map(bookUrl).join('\r\n')}\r\n`;
  document.querySelector('#download-list').href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
}

function renderDetail() {
  const id = new URLSearchParams(window.location.search).get('id');
  const book = BOOKS.find((item) => item.id === id);
  const detail = document.querySelector('#detail');
  detail.replaceChildren();
  if (!book) {
    const message = element('div', 'not-found');
    message.append(element('h1', '', '没有找到这本书'), element('p', '', '请返回书架，选择一本书查看。'));
    const back = element('a', 'search-button', '返回书架');
    back.href = './index.html';
    message.append(back);
    detail.append(message);
    return;
  }
  document.title = `${book.title} - 书店练习场`;
  const image = element('div', 'detail-cover-wrap');
  image.append(cover(book, true));
  const info = element('div', 'detail-info');
  info.append(element('p', 'section-kicker', 'BOOK DETAILS / 书籍详情'));
  info.append(element('span', 'book-category detail-category', book.category));
  info.append(element('h1', 'detail-title', book.title));
  info.append(element('p', 'detail-author', `作者：${book.author}`));
  info.append(element('p', 'detail-price', book.price));
  const description = element('section', 'description');
  description.append(element('h2', '', '内容简介'), element('p', 'book-description', book.description));
  info.append(description);
  const note = element('p', 'detail-note', '这是练习用的虚构书籍，不支持购买。');
  info.append(note);
  detail.append(image, info);
}

if (document.body.dataset.page === 'list') renderList();
if (document.body.dataset.page === 'detail') renderDetail();
