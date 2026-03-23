import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from "axios";

const SignUp = () => {

  // initialize your hooks

  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")

  // initialize other hooks for loading,success and error

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // function that will send our data to the database

  const submit=async(e)=>{

    e.preventDefault()
    setLoading("Please wait......")

    // sending data to the database


    try {

      const data=new FormData()

    data.append("username",username)
    data.append("email",email)
    data.append("phone",phone)
    data.append("password",password)

    // call our api

    const response=await axios.post("http://bridgit.alwaysdata.net/api/signup",data)

    setLoading("")

    setSuccess(response.data.message)
      
    } 
    
    catch (error) {





      setLoading("")
      setError(error.message)





      
    }
    




    







  }



  return (
    <div className='row justify-content-center mt-3' >

      <div className='card shadow col-md-6'>

        <h1>Sign Up</h1>

        <form action="" onSubmit={submit}>
          {/* {username} */}

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

        <input type="text" placeholder='Enter your username'className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <br />
        

        <input type="email" placeholder='Enter your email' className='form-control'required value={email}  onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <input type="tel" placeholder='Enter your phone'  className='form-control' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br />

        <input type="password" placeholder='Enter your password' className='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />

        <input type="submit" value="Sign up" className='w-100 form-control bg-warning  text-white'required />
        <br />
        

        <p>Already have an account?<Link to="/signin">Sign In</Link></p>





</form>
      </div>



    </div>
  )
}

export default SignUp