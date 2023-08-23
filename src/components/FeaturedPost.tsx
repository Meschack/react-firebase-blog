import { Image } from './Image.tsx'

export const FeaturedPost = () => {
  return (
    <div className='featured-post d-flex'>
      <div className='badge'>Technology</div>
      <h2>
        The Impact of Technology on the Workplace: How Technology is Changing
      </h2>

      <div className='infos'>
        <div className='author'>
          <Image src='/images/image.png' alt='Avatar de Jason Francisco' />
          <p>Jason Francisco</p>
        </div>

        <div className='date'>August 04, 2022</div>
      </div>
    </div>
  )
}
