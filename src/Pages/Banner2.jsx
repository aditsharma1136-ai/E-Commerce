import React from 'react'
import testimonials from '../Data/Testimonial'

const Banner2 = () => {
    return (
        <div className='min-h-full w-full bg-white'>
            <div className='flex gap-10 px-10 pt-10 min-h-[200px]'>

                <div className='w-1/2 h-[200px] overflow-hidden'>
                    <img
                        className='w-full h-full bg-cover bg-center'
                        src="https://i.pinimg.com/736x/42/b5/4f/42b54fc86c9cbef71b0cba75b5041c33.jpg"
                        alt=""
                    />
                </div>

                <div className='w-1/2 h-[200px] overflow-hidden'>
                    <img
                        className='w-full h-full bg-cover bg-center'
                        src="https://i.pinimg.com/736x/c5/ac/cf/c5accfb1bfe6f46331ac6dd9f72d003e.jpg"
                        alt=""
                    />
                </div>
            </div>
            <h2 className='flex justify-center items-center text-[1.8rem] pt-20 pb-10 font-semibold'>What Our Happy User Say</h2>
            <div className='grid grid-cols-5 gap-6 px-10 pb-20'>
                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-4 rounded-lg shadow hover:scale-105 transition"
                    >
                        <div className="flex gap-1 pb-4">
                            {item.stars.map((star) => (
                                <span key={star.id}>
                                    {star.filled ? "⭐" : "☆"}
                                </span>
                            ))}
                        </div>
                        <h3 className='h-[120px] overflow-hidden text-sm'>
                            {item.message}
                        </h3>

                        <div className='mt-3 flex items-center gap-2'>
                            <img
                                className='w-8 h-8 rounded-full'
                                src={item.image}
                                alt=""
                            />
                            <div>
                                <p className='text-xs font-semibold'>{item.name}</p>
                                <p className='text-[10px] text-gray-500'>{item.product}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Banner2
