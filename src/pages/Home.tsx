import { Advertisement } from '../components/Advertisement.tsx'
import { FeaturedPost } from '../components/FeaturedPost.tsx'
import { Image } from '../components/Image.tsx'
import { LatestPosts } from '../components/LatestPosts.tsx'
import { AppWrapper } from '../layout/global/AppWrapper.tsx'

export const Home = () => {
  return (
    <AppWrapper>
      <div className='banner '>
        <Image src='/images/banner.webp' className='w-full' />
        <FeaturedPost />
      </div>

      <Advertisement />

      <LatestPosts />

      <Advertisement />
    </AppWrapper>
  )
}
