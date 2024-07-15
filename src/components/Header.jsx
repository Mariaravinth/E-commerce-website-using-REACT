import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggle = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to="/"><img src="images/logo.png" width="125px" alt=""/></Link>
                </div>
                <nav>
                    <ul id="MenuItems" style={{ maxHeight: menuOpen ? '200px' : '0px' }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Contact</Link></li>
                        <li><Link to="/account">Account</Link></li>
                    </ul>
                </nav>
                <Link to="/cart"><img src="images/cart.png" alt="" width="30px" height="30px" /></Link>
                <img src="images/menu.png" alt="" className="menu-icon" onClick={menuToggle} />
            </div>
        </div>
    )
}

export default Header