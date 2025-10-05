import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) =>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e)=>submitHandler(e)}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required className='text-xl
                 border-2 mb-1 border-emerald-600 py-3    px-5 rounded-full' type="email" placeholder='Enter your email'/>
                <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='text-xl mt-1
                 border-2 border-emerald-600 py-3 px-5 rounded-full' type="password" placeholder='Enter Password'/>
                <button className='text-xl mt-5 bg-emerald-600
                 border-emerald-600 py-3 px-5 rounded-full' >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login