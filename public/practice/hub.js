(() => {
  fetch('./lessons.json').then(response => {
    if (!response.ok) throw new Error('Lessons unavailable');
    return response.json();
  }).then(lessons => {
    document.querySelectorAll('[data-lesson]').forEach(card => {
      const lesson = lessons.find(item => item.id === card.dataset.lesson);
      if (!lesson) return;
      card.querySelector('blockquote').textContent = lesson.request;
      card.querySelector('.task-link').href = lesson.path;
    });
  }).catch(() => { /* 静态内容仍可直接使用。 */ });
})();
