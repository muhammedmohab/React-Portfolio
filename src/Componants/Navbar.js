import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
  return(
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand'>
          <img src='' width='30' height='30' alt='logo'/>
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/counter' className='nav-link'>Counter</Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-link'>Products</Link>
            </li>
            <li className='nav-item'>
              <Link to='/todo' className='nav-link'>Todo</Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-link'>Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;