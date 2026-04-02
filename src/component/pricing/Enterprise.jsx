const Enterprise = () => {
  return (
    <div className="w-full p-6 rounded-2xl shadow-lg bg-gray-100 text-gray-800 relative">

      <h2 className='text-2xl sm:text-3xl font-bold mb-2'>Enterprise</h2>
      <p className='text-gray-500 mb-4 text-sm sm:text-base'>For teams and businesses</p>

      <h3 className='text-xl sm:text-2xl font-bold mb-4'>
        $99 <span className='text-sm font-normal text-gray-500'>/Month</span>
      </h3>

      <div className="space-y-2 text-gray-600 text-sm sm:text-base">
        <p><span className="text-green-500 font-bold">✔</span> Everything in Pro</p>
        <p><span className="text-green-500 font-bold">✔</span> Team collaboration</p>
        <p><span className="text-green-500 font-bold">✔</span> Custom integrations</p>
        <p><span className="text-green-500 font-bold">✔</span> Dedicated support</p>
        <p><span className="text-green-500 font-bold">✔</span> SLA guarantee</p>
        <p><span className="text-green-500 font-bold">✔</span> Custom branding</p>
      </div>

      <button className="mt-6 w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-bold hover:opacity-90 transition cursor-pointer">
        Contact Sales
      </button>

    </div>
  )
}

export default Enterprise