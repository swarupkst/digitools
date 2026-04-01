import React from 'react'

const Bottom = () => {
  return (
    <div>
      <div className="w-full mx-auto text-center text-white px-5 lg:px-20 py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <h4 className="text-2xl font-bold mb-3">
          Ready to Transform Your Workflow?
        </h4>
        <p className="mb-6 text-white/90">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>
        <div className='flex justify-center items-center gap-4 mb-6'>
          <button className='bg-white py-3 px-6 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer'>
            <span className='bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent font-bold'>
              Explore Products
            </span>
          </button>
          <button className='border border-white py-3 px-6 rounded-3xl font-bold transition-all duration-300 hover:bg-white hover:text-indigo-600 hover:scale-105 cursor-pointer'>
            View Pricing
          </button>
        </div>
        <p className="text-sm text-white/80">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  )
}

export default Bottom