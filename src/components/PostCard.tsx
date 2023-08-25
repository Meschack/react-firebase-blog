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
    <div className='post-card-grid d-flex flex-direction-column gap-2 align-items-center justify-content-center bg-white rounded-1 p-1 border-2 border-secondary-100 card'>
      <Link to={`/blog/${slug(post.title)}`}>
        <Image
          className='cover rounded-1 w-full'
          src={post.cover}
          alt={post.title}
        />
        <span aria-hidden='true' className='invisible-link'></span>
      </Link>
      <div className='content d-flex flex-direction-column gap-2 align-items-start justify-content-start py-1 gap-1'>
        <div className='heading d-flex align-items-start flex-direction-column gap-2 justify-content-start'>
          <Link
            to={`/category/${post.category.toLowerCase()}`}
            className='sub-link'
          >
            <Badge className='text-white bg-primary'>{post.category}</Badge>
          </Link>
          <Link to={`/blog/${slug(post.title)}`} className='sub-link'>
            <h2 className='title fw-400 fs-3 text-secondary-800'>
              {post.title}
            </h2>
          </Link>
        </div>
        <div className='fw-500 fs-2 d-flex gap-1 align-items-center justify-content-space-between w-full text-secondary-400'>
          <Link
            to={`/author/${slug(post.author.name)}`}
            className='d-flex gap-1 align-items-center justify-content-start sub-link'
          >
            <Avatar src={post.author.avatar} alt={post.title} />
            <small>{post.author.name}</small>
          </Link>
          <div className='sub-link'>{post.date.toDateString()}</div>
        </div>
      </div>
    </div>
  )
}
