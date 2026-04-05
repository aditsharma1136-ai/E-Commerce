import { Link } from "react-router-dom"

const SignUpContent = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#F8F8F8]'>

      <form className='w-[350px] h-[450px] rounded-xl flex flex-col justify-center px-6 gap-5 shadow-lg'>
        <input
          className='w-full px-4 py-3 text-[16px] rounded border-2 border-gray-200 outline-none'
          type="text"
          placeholder='Username'
          required
        />
        <input
          className='w-full px-4 py-3 text-[16px] rounded border-2 border-gray-200 outline-none'
          type="password"
          placeholder='Password'
          required
        />
        <input
          className='w-full px-4 py-3 text-[16px] rounded border-2 border-gray-200 outline-none'
          type="email"
          placeholder='Email'
          required
        />

        <button
          type='submit'
          className='bg-blue-600 text-white py-2 rounded hover:scale-95 transition'
        >
          SignUp
        </button>
        <p className="text-[15px]">
          By signing up, you agree to our{" "}
          <Link to="/terms" className="text-blue-500 underline">
            Terms & Conditions
          </Link>
        </p>
        <p className="flex justify-center items-center ">
          Already registered?{" "}
          <Link to='/login' className="text-blue-500 underline"> 
            Login
          </Link>
        </p>
      </form>

    </div>
  )
}

export default SignUpContent
