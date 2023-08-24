import { Post } from '../types'
import { PostCard } from './PostCard'

const posts: Post[] = [
  {
    author: {
      name: 'Tracey Wilson',
      avatar: '/assets/avatars/tracey-wilson.webp',
    },
    category: 'Technology',
    cover: '/images/post-1.webp',
    date: new Date('2022-08-20'),
    title:
      'The Impact of Téchnology on the Workplace: How Technology is Changing',
  },
  {
    author: {
      name: 'Jason Francisco',
      avatar: '/assets/avatars/jason-francisco.webp',
    },
    category: 'Technology',
    cover: '/images/post-2.webp',
    date: new Date('2022-08-20'),
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    author: {
      name: 'Elizabeth Slavin',
      avatar: '/assets/avatars/elizabeth-slavin.webp',
    },
    category: 'Technology',
    cover: '/images/post-3.webp',
    date: new Date('2022-08-20'),
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    author: {
      name: 'Ernie Smith',
      avatar: '/assets/avatars/ernie-smith.webp',
    },
    category: 'Technology',
    cover: '/images/post-4.webp',
    date: new Date('2022-08-20'),
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    author: {
      name: 'Eric Smith',
      avatar: '/assets/avatars/eric-smith.webp',
    },
    category: 'Technology',
    cover: '/images/post-5.webp',
    date: new Date('2022-08-20'),
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    author: {
      name: 'Tracey Wilson',
      avatar: '/assets/avatars/tracey-wilson.webp',
    },
    category: 'Technology',
    cover: '/images/post-6.webp',
    date: new Date('2022-08-20'),
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    author: {
      name: 'Jason Francisco',
      avatar: '/assets/avatars/jason-francisco.webp',
    },
    category: 'Technology',
    cover: '/images/post-7.webp',
    date: new Date('2022-08-20'),
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    author: {
      name: 'Elizabeth Slavin',
      avatar: '/assets/avatars/elizabeth-slavin.webp',
    },
    category: 'Technology',
    cover: '/images/post-8.webp',
    date: new Date('2022-08-20'),
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    author: {
      name: 'Ernie Smith',
      avatar: '/assets/avatars/ernie-smith.webp',
    },
    category: 'Technology',
    cover: '/images/post-9.webp',
    date: new Date('2022-08-20'),
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
]

export const LatestPosts = () => {
  //   console.log(posts.length)
  return (
    <div className='latest-post d-grid gap-2'>
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  )
}
