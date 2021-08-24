const blogIds = ['lymphoma', 'code'] as const
type BlogId = typeof blogIds[number]

const isBlogId = (source: any): source is BlogId => {
  return blogIds.includes(source)
}

export const getBlogNameById = (id: string): string => {
  if (!isBlogId(id)) {
    return 'General'
  }

  switch (id) {
    case 'lymphoma':
      return 'Lymphoma'
    case 'code':
      return 'Code'
  }
}
