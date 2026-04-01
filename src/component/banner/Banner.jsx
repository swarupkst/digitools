import BannerLeft from './BannerLeft'
import RightBanner from './RightBanner'

const Banner = () => {
  return (
    <div className="w-full flex justify-center">
      
      <div className='flex gap-[60px] justify-between w-11/12 xl:w-8/12 lg:w-10/12 mx-auto py-[60px]  items-center'>
        
        <BannerLeft />
        <RightBanner />

      </div>

    </div>
  )
}

export default Banner