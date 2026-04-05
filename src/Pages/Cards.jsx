import { useNavigate } from 'react-router-dom'
import products from '../Data/Products'

const Cards = () => {
    const navigate = useNavigate();
    return (
        <div className="p-10 bg-white min-h-screen">

            <h2 className="text-center text-2xl font-semibold mb-8">
                Featured Products
            </h2>

            <div className="grid grid-cols-5 gap-6">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-4 rounded-lg shadow hover:scale-105 transition"
                    >

                        <div className="h-[180px] overflow-hidden rounded-md">
                            <img
                                src={item.image}
                                className="w-full h-full object-contain object-center overflow-hidden"
                                alt={item.name}
                            />
                        </div>

                        <h3 className="mt-3 font-semibold">{item.name}</h3>
                        <p className="text-blue-600 font-bold">{item.price}</p>

                        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                            Add to Cart
                        </button>

                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-6'>
                <button
                onClick={()=>{navigate('/shop')}}
                    className='hover:scale-98 border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-md'
                >
                    View More
                </button>
            </div>
        </div>
    )
}

export default Cards