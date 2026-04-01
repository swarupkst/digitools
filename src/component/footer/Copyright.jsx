import React from 'react'

const Copyright = () => {
  return (
    <div>
       <hr className='w-10/12 mx-auto pb-8'/>
      <div className='flex flex-col sm:flex-row justify-between w-10/12 mx-auto pb-5'>
        <p className='text-center'>© 2026 Digitools. All rights reserved.</p>
        <div className='flex gap-3'>
          <p>Privacy Policy </p>
          <p>Terms of Service</p>
          <p>Cookies</p>

        </div>
      </div>
    </div>
  )
}

export default Copyright
