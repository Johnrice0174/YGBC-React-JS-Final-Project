import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return(
    <div className="nav">
      <div className="nav-wrapper">
        <div className="navcontainer">
          <img src="https://zupimages.net/up/20/19/1nu4.png" width="100vh" style={{marginRight: 4 + '%'}} alt="img"/>
          <Link to='/' className='navapp' style={{marginLeft: 10 + '%'}}>Home </Link>
          <Link to='/youtube' className='navapp'>Youtube </Link>
          <Link to='/games' className='navapp'>Games </Link>
          <Link to='/blog' className='navapp'>Blog </Link>
          <Link to='/chat' className='navapp'>Chat </Link>
          <Link to='/others' className='navapp'>Others </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
