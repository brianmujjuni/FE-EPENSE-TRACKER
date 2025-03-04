import React from 'react'
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/input";
import { validateEmail } from "../../utils/helpers";
export default function SignUp() {
  const [profilePic, setProfilePic] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {}
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full md:mt-0 flex flex-col justify-center ">
        <h3 className='text-xl font-semibold text-black'>Creae an Account</h3> 
        <p className='text-sx test-slate-700 mt-[5px] mb-6'>Join us today by entering your details below</p>
        <form onSubmit={handleSignup}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input value={fullName} onchange={({target}) => setFullName(target.value)} placeholder='Enter your full name' type='text' label='Full Name' />
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
