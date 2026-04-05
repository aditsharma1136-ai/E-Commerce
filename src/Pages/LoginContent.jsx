import { useNavigate } from 'react-router-dom'

const LoginContent = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#F8F8F8]'>
      
      <form className='w-[350px] h-[450px] rounded-xl flex flex-col justify-center px-6 gap-5 shadow-lg'>
        
        <input 
          className='w-full px-4 py-3 text-[16px] rounded border-2 border-gray-200 outline-none' 
          type="text" 
          placeholder='UserName' 
          required
        />

        <input 
          className='w-full px-4 py-3 text-[16px] rounded border-2 border-gray-200 outline-none' 
          type="password" 
          placeholder='Password' 
          required
        />

        <button 
          type='submit' 
          className='bg-blue-600 text-white py-2 rounded hover:scale-95 transition'
        >
          Login
        </button>

        <button
        onClick={()=>{
          navigate('/signup'); scrollTo(0,0)
        }}
        type='submit'
        className='border-2 border-blue-600 text-blue-600 py-2 rounded hover:scale-95 transition'
        >
          SignUp
        </button>

      </form>

    </div>
  )
}

export default LoginContent