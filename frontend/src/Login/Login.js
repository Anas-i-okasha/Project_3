import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Login.css'





const Login=()=>{

   return(
<div>
    <Navbar/>
     <div className='local'>
         
         <div className='login'> <div> <h2 className='hed'>Login  </h2>   <label>Email</label> <input className='input' type='text' placeholder='Enter your email' /> </div>
                <div><label> Password </label>   <input className='input' type='password' placeholder='Enter your password' /></div>
               <button className='btt'> Login </button>
         </div>
     </div>
</div>

   )

}

export default Login