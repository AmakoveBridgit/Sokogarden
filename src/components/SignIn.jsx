import React, { useState } from "react"; 
import { Link ,useNavigate} from 'react-router-dom'


import axios from "axios";

const SignIn = () => {
  
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const [loading, setLoading] = useState(""); 
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 


  const navigate = useNavigate(); 


 //Function to submit data to API
 const submit = async (e) => {
  e.preventDefault();//Prevent default actions
  setLoading("Please wait as we log you in");//set progress message

  //Add data to form data object
  try {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    //Post above data to Backend API
    const response = await axios.post(
      "http://bridgit.alwaysdata.net/api/signin",
      data);

      console.log("the response is",response);
      

    setLoading(""); //After successful posting, Clear the loading message

    // Check if the response has user item,
  
    if (response.data.user) {
      // If user is Found, Store user details in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setSuccess(response.data.message);

      // Redirect to /getproducts Component

      setTimeout(()=>{

        navigate("/");
      },2000)
    } 
    else {
      //User Not Found, Show Error message
      setError(response.data.message);
    }
    //If there was an Error, Clear Loading
  } catch (error) {
    setLoading("");
    setError(error.data.message);
  }
};


  return (
    <div className="row justify-content-center mt-5">
    <div className="col-md-6 card shadow p-4">
          <h2>Sign In</h2>
          <form onSubmit={submit}>
            <p className="text-success">{success}</p>
            <p className="text-warning">{loading}</p>
            <p className="text-danger">{error}</p>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <input
            
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-warning w-100">
              Sign In
            </button>
          </form>

          <p>  Don't have an account? <Link to="/signup">Sign Up</Link></p>
      
    </div>
  </div>
  )
}

export default SignIn