import Play from '../../assets/play.png'
import Dot from '../../assets/dot.png'

const BannerLeft = () => {
  return (
    <div>
      <div className=''>
        <div className='inline-flex items-center gap-2 p-2 bg-[#E1E7FF] rounded-2xl'>
  <img src={Dot} className='w-4 h-4' />
  <p className='bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent'>
    New: AI-Powered Tools Available
  </p>
</div>

<h2 className='text-4xl text-center sm:text-left lg:text-5xl sm:text-6xl font-extrabold pt-4'>Supercharge Your <br/> Digital Workflow</h2>
<p className='text-xl text-[#627382] pt-4'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today. Explore Products
</p>

<div className='flex gap-4 pt-8'>
    <button className="rounded-4xl  px-4 py-4 text-white bg-gradient-to-r from-indigo-600  to-purple-500 font-bold cursor-pointer"> Explore Products</button>
    <button className="group px-4 py-2 rounded-4xl border-2 border-indigo-600 bg-transparent font-bold transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500">
  <span className=" flex gap-2 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent group-hover:text-white">
    <img src={Play}/> Watch Demo
  </span>
</button>
</div>
      </div>
    </div>
  )
}

export default BannerLeft
