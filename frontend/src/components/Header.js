import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div>
                    <div className="container__preHeader">
                            <MailOutlineIcon style={{ color:'#f5f5f5'}}/>
                            <NavLink to="">zab-di@gmail.com</NavLink>     
                    </div>
                    <div className="container__preHeader">
                            <PersonIcon style={{ color:'#f5f5f5'}}/>
                            <NavLink to="/createAccount">Create Account</NavLink>     
                    </div>

                    </div>
                    <div className="container__navLinks">
                        <div>
                            <NavLink to="">Logo</NavLink>
                        </div>
                        <div>
                            <NavLink to="">Home</NavLink>
                            <NavLink to="">About Us</NavLink>
                            <NavLink to="">Service</NavLink>
                            <NavLink to="">Products</NavLink>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header