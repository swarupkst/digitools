import Package from '../../assets/package.png'

const Card2 = () => {
    return (
        <div>
            <div className="w-90 p-6 border border-gray-300 rounded-2xl shadow-md relative bg-white text-center">
                <p className="absolute top-3 right-3 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-500 px-3 py-2 rounded-full">
                    02
                </p>
                <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <img
                        src={Package}
                        alt="user"
                        className="w-10 h-10 object-contain"
                    />
                </div>
                <h4 className="text-lg mb-2 font-bold">
                    Choose Products
                </h4>
                <p className="text-sm text-gray-600">
                    Browse our catalog and select the toolsthat fit your needs.
                </p>

            </div>
        </div>
    )
}

export default Card2
