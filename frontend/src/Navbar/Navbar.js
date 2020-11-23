import React  from 'react'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import './Navbar.css'
const Navbar=()=> {
    
        return (
            <div>
                <div className='nav'>
                 <h1> Rental Cars </h1>
                 <ul className='main'>
                     
                     <Link to ='/'>
                         Home
                     </Link> 
                
                     <Link to='/about'>
                         About Us
                     </Link>
                     <Link to='/contact'>
                         Contact Us
                     </Link>
                     <Link to ='/login'> Login 
                     </Link>
                 </ul>
                </div>
            </div>
        )
    
}

export default Navbar
