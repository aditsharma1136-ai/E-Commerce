import { TruckIcon } from '@heroicons/react/24/outline'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
const Banner = () => {
    return (
        <div className='min-h-full pb-10 bg-white'>
            <div className='flex justify-around py-7'>
                <div className='flex items-center gap-4'>
                    <TruckIcon className="h-8 w-8 text-blue-400" />
                    <div>
                        <h4 className='text-[1.1rem] font-semibold'>Free Shipping</h4>
                        <h4 className='text-[0.8rem]'>On All Orders Over $99</h4>
                    </div>
                </div>
                <div className='flex items-center gap-4 '>
                    <ShieldCheckIcon className="h-8 w-8 text-blue-400" />
                    <div>
                        <h4 className='text-[1.1rem] font-semibold'>Secure Payment</h4>
                        <h4 className='text-[0.8rem]'>We Ensure Secure Payment</h4>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <ArrowUturnLeftIcon className="h-8 w-8 text-blue-400" />
                    <div>
                        <h4 className='text-[1.1rem] font-semibold'>100% Money Back</h4>
                        <h4 className='text-[0.8rem]'>30 Days Refund Policy</h4>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-400" />
                    <div>
                        <h4 className='text-[1.1rem] font-semibold'>Online Support</h4>
                        <h4 className='text-[0.8rem]'>24/7 Dedicated Support</h4>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 p-5 gap-4 min-h-[500px]'>
                <div className='bg-blue-300 h-[520px] col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover object-[center_5%] ' src="https://i.pinimg.com/736x/2d/d7/b1/2dd7b1d5f2eb6e57ceda5985d8e234a0.jpg" alt="" />
                </div>
                <div className='bg-blue-300 h-[250px]'>
                    <img className='w-full h-full object-cover object-[center_30%]' src="https://i.pinimg.com/736x/fa/87/53/fa87530b0786f2ef5d6a7c93fc986329.jpg" alt="" />
                </div>
                <div className='bg-blue-300 h-[250px]'>
                    <img className='w-full h-full object-cover object-[center_90%]' src="https://i.pinimg.com/736x/66/b0/72/66b072dbfae3d0800866182d1374f2a0.jpg" alt="" />
                </div>
                <div className='bg-blue-300 h-[250px] col-span-2'>
                    <img className='w-full h-full object-cover object-[center_10%]' src="https://i.pinimg.com/736x/a4/e8/7f/a4e87f77a37610077e81af5287f95163.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
