import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import About from './About';
import './Home.scss';
import CountriesList from './CountriesList';
import Contact from './Contact';

const Home = () => {
  
  const [menuCSS, setMenuCSS] = useState({
    display: "none",
    switch:true,
    status: "close",
  })

   const showMenu = () => {

    if (menuCSS.switch === true) {
      setMenuCSS({
        display: "flex",
        switch: false,
        status: "open",
      })
    } else {
      setMenuCSS({
        display: "none",
        switch: true,
        status:"close",
      })
    }


  }
    
  return (
      
        <>
       <nav>
         
         <div className="BurgerMenu_Container" 
         role="button"
         onClick={showMenu}>
           <i className={menuCSS.status}></i>
           <i className={menuCSS.status}></i>
           <i className={menuCSS.status}></i>
           </div>
          <ul style={{display: menuCSS.display}}>
           <li><Link to="/Home">Home</Link></li>
           <li><Link to="/About">About</Link></li>
           <li><Link to="/CountriesList">Countries</Link></li>
           <li><Link to="/Contact">Contact Us</Link></li>
           </ul>
       </nav>
       <main>
       <span className="know"> Did You know ?</span>
       </main>
     
        </>
       
      );
    }
  

  export default Home;