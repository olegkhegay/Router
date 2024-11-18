import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className="header">
            <div className="container">
                <div className="nav">
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contacts'}>Contacts</Link>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header