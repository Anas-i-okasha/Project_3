import React  from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

const Home=()=> {
    
        return (
            <div>
                <Navbar/>
               <h1> Home Page </h1> 
            </div>
        )
    
}

export default Home
