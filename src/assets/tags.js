export const tagsObj = [
  { name: "SEO", tagId: 11 },
  { name: "Web-разработка", tagId: 9 },
  { name: "Видео", tagId: 8 },
  { name: "Графический дизайн", tagId: 3 },
  { name: "Интернет-маркетинг", tagId: 10 },
  { name: "Реклама", tagId: 2 },
]

export const searchIn = (tagId, obj) => {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].tagId === tagId) {
      return obj[i].name
    }
  }
}