export type Author = {
    name: string,
    avatar: string
}

export type Post = {
    author: Author,
    title: string,
    category: string,
    date: Date,
    cover: string
}