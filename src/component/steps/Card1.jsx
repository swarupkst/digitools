import User from '../../assets/user.png'

const Card1 = () => {
    return (
        <div>
            <div className="w-90 p-6 border border-gray-300 rounded-2xl shadow-md relative bg-white text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="absolute top-3 right-3 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-500 px-3 py-2 rounded-full">
                    01
                </p>
                <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <img
                        src={User}
                        alt="user"
                        className="w-10 h-10 object-contain"
                    />
                </div>
                <h4 className="text-lg mb-2 font-bold">
                    Create Account
                </h4>
                <p className="text-sm text-gray-600">
                    Sign up for free in seconds. No credit card required to get started.
                </p>

            </div>

        </div>
    )
}

export default Card1
