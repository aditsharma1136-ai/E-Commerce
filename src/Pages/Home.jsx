import React from 'react'
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import Banner from './Banner';
import Cards from './Cards';
import Footer from '../Components/Footer';
import Banner2 from './Banner2';

const Home = () => {
  return (
    <div className='w-full bg-gray-100'>
      <div className='flex min-h-screen w-full  relative'>
        <HeroLeft />
        <HeroRight />
      </div>
      <Banner />
      <Cards />
      <Banner2/>
      <Footer/>
    </div>

  )
}

export default Home