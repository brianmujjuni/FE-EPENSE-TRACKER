import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/inputs/input'
export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

  }
  return (
    <AuthLayout>
    <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center '>
      <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please enter your details to log in</p>
      <form onSubmit={()=>{}}>
        <Input
          value={email}
          onchange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          type='email'
          label='Email'
        />
        <Input
          value={password}
          onchange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
          type='password'
          label='Password'
        />
        <button type='submit' className='btn-primary mt-6' disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        {error && <p className='text-red-500 mt-4'>{error}</p>}
      </form>
    </div>
    </AuthLayout>
  )
}
