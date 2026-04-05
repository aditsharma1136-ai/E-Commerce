import React from 'react'
import myImage from "../assets/model.png";

const HeroRight = () => {
  return (
    <div className='w-1/2 flex justify-center items-center'>
        <img src={myImage}
          alt="model"
          className="absolute right-0 bottom-0 h-[90%] object-contain " />
      </div>
  )
}

export default HeroRight
