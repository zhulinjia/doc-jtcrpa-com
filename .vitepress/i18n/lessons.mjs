export function englishLessons(source, translations) {
  return source.map(lesson => {
    const translated = translations[lesson.id];
    if (!translated?.title || !translated.expected || (lesson.request && !translated.request)) {
      throw new Error(`Missing English practice translation: ${lesson.id}`);
    }
    return {
      ...lesson,
      ...translated,
      doc: '/en' + lesson.doc,
      path: '/en' + lesson.path
    };
  });
}
