import React, {useContext} from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { useAuth } from '../contexts/AuthContext';

const navs = ['main', 'music', 'food', 'netflix', 'youtube', 'calendar']
const NavBar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logoutHandle = ()=>{
    auth.logout();
    navigate('/login');
  }

  return (
    <nav className='lnb'>
      <ul>
        {
          navs.length && navs.map(nav=>(
            <li key={nav}>
              <NavLink to={nav}>{nav}</NavLink>
            </li>
          ))
        }
        {
          !auth.user ? <NavLink to='/login'>login</NavLink> : 
          <NavLink onClick={logoutHandle}>logout</NavLink>
        }
      </ul>
    </nav>
    // <div>nav</div>
  )
}

export default NavBar