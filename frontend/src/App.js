import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About/About'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import './App.css';
const App=()=> {
  return (
    <div >
      <Router>
    
    <Route path='/about' exact component={About} /> 

    <Route path='/' exact component={Home}/>

    <Route path='/contact' exact component={Contact}/>
    </Router>
    </div>
  );
}

export default App;
