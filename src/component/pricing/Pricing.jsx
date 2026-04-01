import Starter from './Starter'
import Pro from './Pro'
import Enterprise from './Enterprise'
import Toptext from './Toptext'

const Pricing = () => {
  return (
    <div className='py-16 lg:py-30'>
      
      <Toptext />

      {/* Responsive Container */}
      <div className='w-11/12 xl:w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10'>
        
        <Starter />
        <Pro />
        <Enterprise />

      </div>

    </div>
  )
}

export default Pricing;