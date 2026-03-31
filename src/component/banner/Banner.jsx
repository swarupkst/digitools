import BannerLeft from './BannerLeft'
import RightBanner from './RightBanner'
const Banner = () => {
  return (
    <div>
        <div className='flex gap-[60px] justify-between w-10/12 mx-auto py-[60px]  items-center'>

      <BannerLeft />
      <RightBanner />


    </div> 
       </div>

  )
}

export default Banner
