const Starter = () => {
  return (
    <div className="w-full p-6 rounded-2xl shadow-lg bg-gray-100 text-gray-800 relative">
      
      <h2 className='text-2xl sm:text-3xl font-bold mb-2'>Starter</h2>
      <p className='text-gray-500 mb-4 text-sm sm:text-base'>Perfect for getting started</p>

      <h3 className='text-xl sm:text-2xl font-bold mb-4'>
        $0 <span className='text-sm font-normal text-gray-500'>/Month</span>
      </h3>

      <div className="space-y-2 text-gray-600 text-sm sm:text-base">
        <p><span className="text-green-500 font-bold">✔</span> Access to 10 free tools</p>
        <p><span className="text-green-500 font-bold">✔</span> Basic templates</p>
        <p><span className="text-green-500 font-bold">✔</span> Community support</p>
        <p><span className="text-green-500 font-bold">✔</span> 1 project per month</p>
        <br />
        <br />
      </div>

      <button className="mt-8 w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-bold hover:opacity-90 transition">
        Get Started Free
      </button>

    </div>
  )
}

export default Starter