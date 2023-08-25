import { Post } from '../types'
import { Image } from './Image'
import { Avatar } from './Avatar'
import { Badge } from './Badge'
import { Link } from 'react-router-dom'
import { slug } from '../utils/slug'

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  return (
    <Link
      to={`/blog/${slug(post.title)}`}
      className='m-post-card-grid d-flex flex-direction-column gap-2 align-items-center justify-content-center bg-white rounded-1 p-1 border-1 border-secondary-100 card'
    >
      <Image
        className='cover rounded-1 w-full'
        src={post.cover}
        alt={post.title}
      />
      <div className='content d-flex flex-direction-column gap-2 align-items-start justify-content-start py-1 gap-1'>
        <div className='heading d-flex align-items-start flex-direction-column gap-2 justify-content-start'>
          <Badge className='text-white bg-primary'>{post.category}</Badge>
          <h2 className='title fw-400 fs-3 text-secondary-800'>{post.title}</h2>
        </div>
        <div className='fw-500 d-flex gap-1 align-items-center justify-content-space-between w-full text-secondary-400'>
          <div className='d-flex gap-1 align-items-center justify-content-start'>
            <Avatar src={post.author.avatar} alt={post.title} />
            <small className='fs-2'>{post.author.name}</small>
          </div>
          <div className='fs-3'>{post.date.toDateString()}</div>
        </div>
      </div>
    </Link>
  )
}
