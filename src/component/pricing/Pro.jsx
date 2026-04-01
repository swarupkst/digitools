import React from 'react'

const Starter = () => {
  return (
    <div className="w-full max-w-sm p-6 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-600 to-purple-500 text-white relative">
      
    

      <h2 className='text-3xl font-bold mb-2'>Pro</h2>
        <p className='text-white/80 mb-4'>Perfect for getting started</p>

        <h3 className='text-2xl font-bold mb-4'>
          $0 <span className='text-sm font-normal'>/Month</span>
        </h3>

        <div className="space-y-2 text-white/90">
          <p>✔ Access to 10 free tools</p>
          <p>✔ Basic templates</p>
          <p>✔ Community support</p>
          <p>✔ 1 project per month</p>
        </div>

        <button className="mt-6 w-full py-2 rounded-xl bg-white text-indigo-600 font-bold hover:opacity-90 transition">
          Get Started
        </button>

    </div>
  )
}

export default Starter