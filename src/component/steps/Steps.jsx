import Card from './Card'

const Steps = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100 py-16">
      
      <div className="w-full max-w-6xl text-center">
        
        <h2 className="font-extrabold text-3xl mb-2">
          Get Started in 3 Steps
        </h2>

        <p className="text-gray-400 text-xl mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>

        <Card />

      </div>

    </div>
  )
}

export default Steps