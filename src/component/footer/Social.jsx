import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Social = () => {
  return (
    <div className='text-white space-y-2'>
      <h4 className='text-xl font-medium'>Resources</h4>

      <div className="flex gap-3">
        
        <div className="bg-white p-2 rounded-full text-black cursor-pointer hover:scale-110 transition">
          <TbBrandInstagramFilled size={20} />
        </div>

        <div className="bg-white p-2 rounded-full text-black cursor-pointer hover:scale-110 transition">
          <FaSquareFacebook size={20} />
        </div>

        <div className="bg-white p-2 rounded-full text-black cursor-pointer hover:scale-110 transition">
          <BsTwitterX size={20} />
        </div>

      </div>
    </div>
  )
}

export default Social;