import React from 'react';
import { Link } from "gatsby"

const Menu = () => (
  <div>
    <ul style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin: 0
    }}>
      <li style={{margin: '0 8px'}}>
        <Link style={{textDecoration: 'none',  color: 'white', display: 'block'}} to='/' title='Home'>Home</Link>
      </li>
      <li style={{margin: '0 8px'}}>
        <Link style={{textDecoration: 'none',  color: 'white', display: 'block'}} to='/about'>About</Link>
      </li>
      <li style={{margin: '0 8px'}}>
        <Link style={{textDecoration: 'none',  color: 'white', display: 'block'}} to='/contact'>Contact</Link>
      </li>
      <li style={{margin: '0 8px'}}>
        <Link style={{textDecoration: 'none',  color: 'white', display: 'block'}} to='/blog'>Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu;
