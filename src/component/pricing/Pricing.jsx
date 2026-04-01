import Starter from './Starter'
import Pro from './Pro'
import Enterprise from './Enterprise'
import Toptext from './Toptext'

const Pricing = () => {
  return (
    <div className='py-30'>
        <Toptext />
    
    <div className='flex justify-between w-8/12 mx-auto'>
      
      <Starter />
      <Pro />
      <Enterprise />
    </div>
    </div>
  )
}

export default Pricing;
