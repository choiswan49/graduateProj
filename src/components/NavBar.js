import React, {useContext} from 'react'
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom'
import './NavBar.css'

const navs = ['main', 'music', 'food', 'netflix', 'youtube', 'calendar', 'login']
const NavBar = () => {
  return (
    <nav className='lnb'>
      <ul>
        <Router>
        {
          navs.length && navs.map(nav=>(
            <li key={nav}>
              <NavLink to={nav}>{nav}</NavLink>
            </li>
          ))
        }
        </Router>
      </ul>
    </nav>
    // <div>nav</div>
  )
}

export default NavBar