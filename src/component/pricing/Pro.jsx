const Pro = () => {
  return (
    <div className="w-full p-6 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-600 to-purple-500 text-white relative">
      
      <h2 className='text-2xl sm:text-3xl font-bold mb-2'>Pro</h2>
      <p className='text-white/80 mb-4 text-sm sm:text-base'>Best for professionals</p>

      <h3 className='text-xl sm:text-2xl font-bold mb-4'>
        $29 <span className='text-sm font-normal'>/Month</span>
      </h3>

      <div className="space-y-2 text-white/90 text-sm sm:text-base">
        <p>✔ Access to all premium tools</p>
        <p>✔ Unlimited templates</p>
        <p>✔ Priority support</p>
        <p>✔ Unlimited projects</p>
        <p>✔ Cloud sync</p>
        <p>✔ Advanced analytics</p>
      </div>

      <button className="mt-6 w-full py-2 rounded-xl bg-white text-indigo-600 font-bold hover:opacity-90 transition">
        Start Pro Trial
      </button>

    </div>
  )
}

export default Pro