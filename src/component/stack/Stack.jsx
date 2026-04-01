import React from 'react'

const Stack = () => {
  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
      
      <div className="w-11/12 xl:w-8/12 mx-auto flex flex-row justify-between items-center text-white px-4 sm:px-8 lg:px-10 py-8 lg:py-10">

        {/* Item 1 */}
        <div className="text-center flex-1">
          <h2 className="font-extrabold text-xl sm:text-3xl lg:text-6xl">50K+</h2>
          <p className="text-[10px] sm:text-sm lg:text-xl font-medium">Active Users</p>
        </div>

        {/* Divider */}
        <div className="h-[40px] sm:h-[60px] lg:h-[80px] w-[1px] sm:w-[2px] bg-white/30"></div>

        {/* Item 2 */}
        <div className="text-center flex-1">
          <h2 className="font-extrabold text-xl sm:text-3xl lg:text-6xl">200+</h2>
          <p className="text-[10px] sm:text-sm lg:text-xl font-medium">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="h-[40px] sm:h-[60px] lg:h-[80px] w-[1px] sm:w-[2px] bg-white/30"></div>

        {/* Item 3 */}
        <div className="text-center flex-1">
          <h2 className="font-extrabold text-xl sm:text-3xl lg:text-6xl">4.9</h2>
          <p className="text-[10px] sm:text-sm lg:text-xl font-medium">Rating</p>
        </div>

      </div>
    </div>
  )
}

export default Stack