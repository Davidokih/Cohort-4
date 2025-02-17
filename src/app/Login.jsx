import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-full'>
        <form className='min-w-[400px] shadow-sm bg-gray-100 flex items-center justify-center flex-col p-4'>
            <h1 className='font-bold text-xl mb-4'>Login</h1>
            <div className='flex flex-col w-full mb-2'>
                <label className='font-medium mb-1 text-base'>Email</label>
                <input placeholder='Enter email address' className='w-full border border-gray-300 focus:outline-0 rounded py-2 px-2'/>
            </div>
            <div className='flex flex-col w-full mb-2'>
                <label className='font-medium mb-1 text-base'>Password</label>
                <input type='password' className='w-full border border-gray-300 focus:outline-0 rounded py-2 px-2'/>
            </div>

            <button className='bg-green-400 w-full py-2 rounded-md mt-4 mb-1'>
                Submit
            </button>
            <p>Don't have an account?<Link to='/register'> <strong>Register</strong></Link></p>
        </form>
    </div>
  )
}

export default Login