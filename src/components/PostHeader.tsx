import { Avatar } from './Avatar'
import { Badge } from './Badge'
import { Image } from './Image'

export const PostHeader = () => {
  return (
    <div className='post-header'>
      <div className='post-infos d-flex flex-direction-column gap-2'>
        <Badge className='text-white bg-primary'>Technology</Badge>
        <h1 className='text-secondary-800 fs-4'>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className='informations d-flex align-items-center gap-2'>
          <div className='author-informations d-flex align-items-center gap-1'>
            <Avatar
              src='/assets/avatars/tracey-wilson.webp'
              alt='Avatar de Tracey wilson'
            />
            <small>Tracey Wilson</small>
          </div>
          <div className='date'>August 20, 2022</div>
        </div>
      </div>
      <div className='cover my-3'>
        <Image
          src='/images/post-cover.png'
          alt="Couverture de l'article"
          className='w-full'
        />
      </div>
    </div>
  )
}
