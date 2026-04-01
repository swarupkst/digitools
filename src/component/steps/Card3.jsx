import Rocket from '../../assets/rocket.png'

const Card3 = () => {
    return (
        <div className="w-full p-5 sm:p-6 border border-gray-300 rounded-2xl shadow-md relative bg-white text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <p className="absolute top-3 right-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-500 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                03
            </p>

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <img src={Rocket} alt="rocket" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>

            <h4 className="text-base sm:text-lg font-semibold mb-2">
                Start Creating
            </h4>

            <p className="text-xs sm:text-sm text-gray-600">
                Download and start using your premium tools immediately.
            </p>

        </div>
    )
}

export default Card3