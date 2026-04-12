import React from 'react'
import Footer from '../Components/Footer'
import BlogData from "../Data/BlogData";
import Tags from "../Data/Tags";

const Blog = () => {
  return (
    <div>
      {/* Hero Image */}
        <div className='w-[95%] m-auto'>
          <img
            className='w-full'
            src="https://static-assets.business.amazon.com/assets/in/7th-jan/hero-images/MainBlog_2880x960.jpg.transform/1440x480/image.jpg"
            alt=""
          />
        </div>
      <div className='min-h-screen max-w-[1200px]  mx-auto px-6'>

        

        {/* Main Section */}
        <div className='w-full min-h-[400px] pt-10 flex gap-8'>

          {/* Sidebar */}
          <div className='w-[25%]'>
            <h2 className='font-semibold text-xl text-gray-600 mb-4'>Tags</h2>

            <ul className='flex flex-col gap-4'>
              {Tags.map((tag, index) => (
                <li key={index}>
                  <a href="/" className='text-blue-600 hover:underline font-semibold'>
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cards Section */}
          <div className='w-[70%] flex gap-6'>

            {/* Card 1 */}
            <div className='bg-white border border-gray-200 shadow w-[48%] min-h-[300px] hover:shadow-[8px_8px_10px_rgba(0,0,0,0.25)] hover:scale-105 transition-ease-in-out duration-260'>
              <div className='w-full'>
                <img
                  className='w-full h-[200px] object-cover'
                  src="https://static-assets.business.amazon.com/assets/global/images/blogs/images/cover/1403-ab-a-blog-cover-1450x664.png.transform/696x320/image.jpg"
                  alt=""
                />
                <div className='p-4'>
                  <h2 className='font-semibold mb-2 text-[1.1rem] leading-relaxed'>
                    What is Blaze Business?
                  </h2>
                  <p className='leading-relaxed text-sm text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem expedita illum placeat, perspiciatis quaerat esse nobis possimus dolorum sint?
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-white border border-gray-200 shadow w-[48%] min-h-[300px] hover:shadow-[8px_8px_10px_rgba(0,0,0,0.25)] hover:scale-105 transition-ease-in-out duration-260'>
              <div className='w-full'>
                <img
                  className='w-full h-[200px] object-cover'
                  src="https://static-assets.business.amazon.com/assets/in/blogs/post-lockdown-workplace-safety-measures/Blog_laptop_cover_1450x664.jpg.transform/696x320/image.jpg"
                  alt=""
                />
                <div className='p-4'>
                  <h2 className='font-semibold mb-2 text-[1.1rem] leading-relaxed'>
                    Ensuring Workspace Safety After COVID-19 Lockdown
                  </h2>
                  <p className='leading-relaxed text-sm text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem expedita illum placeat, perspiciatis quaerat esse nobis possimus dolorum sint?
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div>
          <h2 className='flex justify-center text-[1.8rem] py-5 font-bold'>Latest news</h2>
        </div>
        <div className='grid grid-cols-3 gap-5'>
          {BlogData.map((blog, index) => (
            <div className='hover:scale-105 transition-ease-in-out duration-260' key={index}>
              <img src={blog.img} alt="" />
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-center py-10'>
          <a className='flex justify-center underline font-bold text-xl px-4 py-2 text-blue-800 w-[10rem]' href="/about">Read more</a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog