export type Author = {
  name: string
  avatar: string
}

export type Post = {
  id: number
  author: Author
  title: string
  category: string
  date: Date
  cover: string
}
