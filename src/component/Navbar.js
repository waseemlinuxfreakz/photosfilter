import React from 'react';
import logo from '../logo.png';


function Navbar() {
    return (

    <header className='main_header'>
      <div className="container">
        <a href="/" className='logo'><img src={logo} alt="logo"/></a>
      </div>
    </header>     
  
    );
  }
  

  export default Navbar;


 