
import React, { useState } from 'react';
import { API_URI } from '../../data/apiPath';

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(true);

  const handleSubmit = async(e)=> {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URI}/room/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })

      })

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert("Room register success")
        setusername("");
        setemail("");
        setpassword("");
        
      }


    } catch (error) {
      console.error("restration failed", error);
      alert("Registartion failed")

    }
  }


 const [passwordVisible, setPasswordVisible] = useState(false);  // State for toggling visibility

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };  

  return (
    <div className='regForbg'>
     <div className='reg'>
        <form onSubmit={handleSubmit}>
              <h2 className='forReg'>Register</h2>
              
              <label>Username</label> <br/>
              <input type='text' name="username" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Enter Your Username' /> <br/> <br/>
              <label>Email</label> <br/>
              <input type='text' name="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter Your Email' /> <br/> <br/>
          <label>Password</label> <br />
          <div style={{ position: 'relative' }}>
          <input type={passwordVisible ? 'text' : 'password'} name="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password' /> <br />
          
          <span 
            onClick={togglePasswordVisibility} 
            style={{ 
              position: 'absolute', 
              right: '10px', 
              top: '32%', 
              transform: 'translateY(-50%)', 
              cursor: 'pointer'
            }}
          >
            👁️
          </span>
          </div>
         <div className='regBtn'> <br/>
            <button type='submit'>Submit</button>          
        </div>
      </form>
      </div>
      </div>
  )
}

export default Register