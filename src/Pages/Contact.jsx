import React from 'react'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='m-auto w-1/2 py-14 mb-20'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5rem]'>Contact us</h2>
          <div className='flex flex-col '>
            <h4 className='font-semibold'>How can we help?</h4>
            <select className="w-[60%] shadow text-sm px-3 py-1 border-2 border-gray-200 hover:bg-gray-200 rounded-full">
              <option>Audiences and targeting</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
          <div>
            <h4 className='font-semibold'>Specify your topic</h4>
            <select className="w-[60%] shadow text-sm px-3 py-1 border-2 border-gray-200 hover:bg-gray-200 rounded-full">
              <option>Unable to add audience to line item</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>

          <div className='min-h-[280px] border-2 border-gray-300 shadow rounded-xl'>
            <h2 className='font-semibold mt-6 ml-8'>How would you like to be contacted?</h2>
            <div className='w-full min-h-[100px] flex gap-5 px-6 mt-3'>
              <div className='w-1/2 min-h-full border-2 rounded-xl border-gray-300 shadow hover:bg-[#EDF5FB] hover:border-[#338FD2] flex justify-center items-center flex-col'>
                <h3 className='font-semibold'>Email</h3>
                <p>We'll respond via email.</p>
              </div>
              <div className='w-1/2 min-h-full border-2 rounded-xl border-gray-300 shadow hover:bg-[#EDF5FB] hover:border-[#338FD2] flex justify-center items-center flex-col'>
                <h3 className='font-semibold'>Phone call</h3>
                <p>A support specialist will call you now.</p>
              </div>
            </div>
            <h2 className='font-semibold mt-3 ml-8'>Select support language</h2>
            <button className='font-semibold text-md mb-4 px-4 py-1 border-2 hover:bg-[#EDF5FB] hover:border-[#338FD2] border-gray-300 mt-3 ml-8 rounded-md'>English</button>
          </div>


          <div className='flex flex-col min-h-[700px] border-2 border-gray-300 shadow rounded-xl'>
            <form className='p-8'>
              <div className='flex flex-col gap-1 '>
                <h2 className='font-semibold'>Subject</h2>
                <input className='w-1/2 py-1 px-2 mb-3 text-md shadow border-2 border-gray-300 rounded-md' type="text" placeholder='Enter subject ' required />
              </div>
              <div className='flex flex-col gap-1 '>
                <h2 className='font-semibold'>Description</h2>
                <textarea className='w-[80%] min-h-[150px] mb-3 py-1 px-2 text-md shadow border-2 border-gray-300 rounded-md' type="text" placeholder='Please describe your issue' required />
              </div>
              <div className='flex flex-col gap-1 '>
                <h2 className='font-semibold'>Line item ID</h2>
                <input className='w-[80%] mb-3 py-1 px-2 text-md shadow border-2 border-gray-300 rounded-md' type="text" placeholder='Enter line item ID or URL' required />
              </div>
              <div className='flex flex-col gap-1 '>
                <h2 className='font-semibold'>Audience name</h2>
                <input className='w-[80%] mb-3 py-1 px-2 text-md shadow border-2 border-gray-300 rounded-md' type="text" placeholder='Enter audience name' required />
              </div>
              <div className='flex flex-col gap-1 '>
                <h2 className='font-semibold'>Country</h2>
                <select className="w-[20%] shadow text-sm mb-3 px-3 py-1 border-2 border-gray-200 hover:bg-gray-200 rounded-full">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Japan</option>
                  <option>China</option>
                </select>
              </div>
              <div className='flex flex-col gap-1 '>
                <h2 className='font-semibold'>Phone number</h2>
                <div className='flex gap-2'>
                  <select className="w-[12%] text-sm px-3 py-1 border-2 border-gray-200 hover:bg-gray-200 rounded-md shadow">
                    <option>+91</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                  <input className='w-[30%] px-2 py-1 border-2 border-gray-200 rounded-md shadow' type="tel" placeholder='555-555-555' required />
                </div>
                <button type='submit' className='w-[25%] text-white hover:scale-95 font-semibold text-md px-3 py-2 border-none bg-[#0073C7] mt-3 rounded-full'>Request phone call</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Contact
