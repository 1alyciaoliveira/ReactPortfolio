 import React from 'react'
 import { navLinksdata } from '../../constants'
 
 const Navbar = () => {
   return (
    <nav className='navbar'>
      <div className='title'>
        <h1>Alycia Oliveira</h1>
      </div>
      <div className='links'>
        <ul>
          {
            navLinksdata.map(({_id, title, link}) =>(
              <li key={_id}>
                <a href={link}>{title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
   )
 };
 
 export default Navbar