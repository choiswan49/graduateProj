import React from 'react'
import Logo from './Logo'
import './Header.css'
import NavBar from './NavBar'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {
  const auth = useAuth();

  return (
    <header>
        <Logo />
        <div className='navbar-contanier'>
        <NavBar />
        {
        !auth?.user ? null : <div className='user-content'>
                                {auth.user.name} 님
                              </div>
        }
        </div>
    </header>
  )
}

export default Header