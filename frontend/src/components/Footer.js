import React from 'react'
import { NavLink } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import '../styles/footer.css'

function Footer() {
    return (
        <footer>
            <div className="container__super__footer">
                <div className="container__links">
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">About US</NavLink>
                        <NavLink to="/">Service</NavLink>
                        <NavLink to="/">Products</NavLink>
                    </div>
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">About US</NavLink>
                        <NavLink to="/">Service</NavLink>
                        <NavLink to="/">Products</NavLink>
                    </div>
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">About US</NavLink>
                        <NavLink to="/">Service</NavLink>
                        <NavLink to="/">Products</NavLink>
                    </div>
                </div>
                <div className="container__newsletter">
                    <Newsletter />
                </div>
            </div>
            <hr id="separation__footer"/>
            <div className="copyright">
                <p>Copyright 2020 by Rusbent Matta. All Rights Reserved.</p>
            </div>

        </footer>
    )
}

export default Footer
