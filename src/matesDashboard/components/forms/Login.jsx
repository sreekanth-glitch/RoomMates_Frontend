
import React, { useState } from 'react';
import { API_URI } from '../../data/apiPath';
const Login = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginhandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URI}/room/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })

      })

      const data = await response.json();
      if (response.ok) {
        alert("Room login success")
        setemail("");
        setpassword("");
        localStorage.setItem('loginToken', data.token)
      }
      console.log("this is roomId", data.roomId)
      const roomId = data.roomId;

      localStorage.setItem('roomId', roomId)
      window.location.reload()


    } catch (error) {
      console.error(error);
      

    }
  };

  



const [passwordVisible, setPasswordVisible] = useState(false);  // State for toggling visibility

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='logForbg'>
      <div className='log'>
        <form onSubmit={loginhandler}>
          <h2 className='forlog'>Login</h2>
          
              <label>Email</label> <br/>
              <input type='text' name='email' value= {email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter Your Email' /> <br/> <br/>
              <label>Password</label> <br/>
              <div style={{ position: 'relative' }}>
          <input type={passwordVisible ? 'text' : 'password'}name='password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password' /> <br />
          
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
         <div className='logBtn'> <br/>
            <button type='submit'>Login</button>          
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login