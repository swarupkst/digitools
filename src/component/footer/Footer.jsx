import Digitools from './Digitools'
import Products from './Products'
import Company from './Company'
import Resources from './Resources'
import Social from './Social'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white px-6 py-10">
      
      <div className="
        w-10/12 mx-auto
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-6 
        gap-8
        text-center 
        pt-30 pb-20
      ">
        
        {/* Digitools takes more space */}
        <div className="lg:col-span-2 flex justify-center">
          <Digitools />
        </div>

        <div className="flex justify-center">
          <Products />
        </div>

        <div className="flex justify-center">
          <Company />
        </div>

        <div className="flex justify-center">
          <Resources />
        </div>

        <div className="flex justify-center">
          <Social />
        </div>

      </div>
      <Copyright />

    </div>
  )
}

export default Footer;