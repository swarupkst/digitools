import React from 'react'

const Stack = () => {
  return (
    <div>
      <div className="w-full mx-auto flex justify-center items-center text-white px-20 py-10 bg-gradient-to-r from-indigo-600 to-purple-600 gap-30">

  {/* Item 1 */}
  <div className="text-center">
    <h2 className="font-extrabold text-6xl">50K+</h2>
    <p className="text-xl font-medium">Active Users</p>
  </div>

  {/* Divider */}
  <div className="h-[80px] w-[2px] bg-white/30"></div>

  {/* Item 2 */}
  <div className="text-center">
    <h2 className="font-extrabold text-6xl">200+</h2>
    <p className="text-xl font-medium">Premium Tools</p>
  </div>

  {/* Divider */}
  <div className="h-[80px] w-[2px] bg-white/30"></div>

  {/* Item 3 */}
  <div className="text-center">
    <h2 className="font-extrabold text-6xl">4.9</h2>
    <p className="text-xl font-medium">Rating</p>
  </div>

</div>
    </div>
  )
}

export default Stack
