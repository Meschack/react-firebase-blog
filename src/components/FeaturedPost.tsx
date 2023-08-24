import { Badge } from './Badge.tsx'
import { Image } from './Image.tsx'

export const FeaturedPost = () => {
  return (
    <div className='featured-post d-flex bg-white rounded-1 flex-direction-column gap-2'>
      <Badge className='bg-primary text-white'>Technology</Badge>
      <h2>
        The Impact of Technology on the Workplace: How Technology is Changing
      </h2>

      <div className='infos d-flex align-items-center gap-2 text-secondary-400'>
        <div className='author d-flex align-items-center gap-2'>
          <Image
            src='/assets/avatars/jason-francisco.webp'
            alt='Avatar de Jason Francisco'
          />
          <p>Jason Francisco</p>
        </div>

        <div className='date'>August 04, 2022</div>
      </div>
    </div>
  )
}
