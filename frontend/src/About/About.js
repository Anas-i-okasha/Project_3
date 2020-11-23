import React  from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import './About.css'

const About=()=> {
    
        return (
            <div>
                <Navbar/>
                <div > <h1 className='head'> About US  </h1>  </div>
            <div className='about'> 
                <div className='card'> 
                    <h2> About Rental Car  </h2>
                    <p> Rental car is a company , it was founded to assist the students and who 
                        is interested in languages to learn it. so far in our website we have three
                        courses , English , Germany and Turkish
                    </p>
                </div>
            
            
                <div className='card'> 
                    <h2> Our mission and vision </h2>
                    <p> 
                        - Providing high quality educational courses that exceed customers’ expectations.
                    </p>
                    <p> - Upgrading the corporate culture through mutual respect and  (continuous improvement).</p>
                </div>
            
            </div>
            </div>
        )
    
}

export default About
