import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroLeft = () => {

    const navigate = useNavigate();
    return (
        <div className='w-1/2 flex flex-col justify-center items-center pt-[5rem] pb-[10rem]'>
            <h1 style={{ fontFamily: '"Dancing Script", cursive'  }} className='text-[3.5rem] text-[#0066CB]'>Seasons Sale</h1>
            <h1 className='font-bold text-[4.5rem]'>MEN'S FASHION</h1>
            <h1 className='text-[2rem] font-semibold'>Min. 35-75% Off</h1>
            <div className='flex gap-10 mt-[4rem]'>
                <button onClick={()=> {navigate('/shop'); scrollTo(0,0)}} className='hover:scale-95 active:bg-white active:border-2 active:border-[#0066CD] active:text-[#0066CD] py-2 px-6 text-[0.8rem] font-semibold bg-[#0066CD] text-white'>SHOP NOW</button>
                <button className='hover:scale-95 py-2 px-6 text-[0.8rem] font-semibold bg-white border-2 border-[#0066CD] text-[#0066CD]'>READ MORE</button>
            </div>
        </div>
    )
}

export default HeroLeft
