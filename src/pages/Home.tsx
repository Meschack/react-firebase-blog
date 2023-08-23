import { Advertisement } from '../components/Advertisement.tsx'
import { FeaturedPost } from '../components/FeaturedPost.tsx'
import { AppWrapper } from '../layout/global/AppWrapper.tsx'

export const Home = () => {
  return (
    <AppWrapper>
      <div className='banner'>
        <FeaturedPost />
      </div>

      <Advertisement />
    </AppWrapper>
  )
}
