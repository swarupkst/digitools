import Rocket from '../../assets/rocket.png'

const Card3 = () => {
  return (
    <div>
      <div className="w-90 p-6 border border-gray-300 rounded-2xl shadow-md relative bg-white text-center">
                <p className="absolute top-3 right-3 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-500 px-3 py-2 rounded-full">
                    03
                </p>
                <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <img
                        src={Rocket}
                        alt="user"
                        className="w-10 h-10 object-contain"
                    />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                    Start Creating
                </h4>
                <p className="text-sm text-gray-600">
                    Download and start using your premium tools immediately.
                </p>

            </div>
    </div>
  )
}

export default Card3
