import React from 'react'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div className='w-full min-h-screen bg-gray-50'>

      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center px-10 py-16 gap-10'>
        
        <div className='md:w-1/2'>
          <h1 className='text-4xl font-bold mb-4'>About Our Store</h1>
          <p className='text-gray-600 text-lg'>
            We are committed to delivering the best shopping experience with high-quality products 
            at affordable prices. Our mission is to make online shopping simple, fast, and reliable.
          </p>
        </div>

        <div className='md:w-1/2'>
          <img
            className='w-full h-[300px] object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
            alt=""
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-10 py-10'>
        <div className='bg-white p-6 rounded-lg shadow text-center'>
          <h2 className='text-2xl font-bold text-blue-600'>10K+</h2>
          <p className='text-gray-500'>Happy Customers</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow text-center'>
          <h2 className='text-2xl font-bold text-blue-600'>500+</h2>
          <p className='text-gray-500'>Products</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow text-center'>
          <h2 className='text-2xl font-bold text-blue-600'>4.8★</h2>
          <p className='text-gray-500'>Average Rating</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow text-center'>
          <h2 className='text-2xl font-bold text-blue-600'>24/7</h2>
          <p className='text-gray-500'>Customer Support</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className='flex flex-col md:flex-row items-center px-10 py-16 gap-10'>
        
        <div className='md:w-1/2'>
          <img
            className='w-full h-[300px] object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt=""
          />
        </div>

        <div className='md:w-1/2'>
          <h2 className='text-3xl font-semibold mb-4'>Our Mission</h2>
          <p className='text-gray-600'>
            Our goal is to provide top-quality products while ensuring customer satisfaction. 
            We believe in innovation, trust, and building long-term relationships with our customers.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className='px-10 py-16'>
        <h2 className='text-3xl font-semibold text-center mb-10'>Meet Our Team</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            {
              name: "Aditya Sharma",
              role: "Founder",
              img: "https://randomuser.me/api/portraits/men/10.jpg"
            },
            {
              name: "Riya Kapoor",
              role: "Designer",
              img: "https://randomuser.me/api/portraits/women/20.jpg"
            },
            {
              name: "Kunal Verma",
              role: "Developer",
              img: "https://randomuser.me/api/portraits/men/30.jpg"
            },
            {
              name: "Sneha Roy",
              role: "Marketing",
              img: "https://randomuser.me/api/portraits/women/40.jpg"
            }
          ].map((member, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow text-center'>
              <img
                className='w-20 h-20 rounded-full mx-auto mb-3'
                src={member.img}
                alt=""
              />
              <h3 className='font-semibold'>{member.name}</h3>
              <p className='text-sm text-gray-500'>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
          <Footer/>
    </div>
  )
  
}

export default About