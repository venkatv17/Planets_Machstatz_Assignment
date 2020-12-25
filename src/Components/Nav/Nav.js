import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/icon.png'

const Nav = () => {

    const navStyle = {
        color: 'white',
        'text-decoration': 'none'
    };

    return ( 
        <nav>
            <Link style={navStyle} className="Logo" to="/">
                <img className="icon" src={logo} alt=""></img>
                <h2>MilkyWay</h2></Link>
            <ul className="ListItems">
            <Link style={navStyle} to="/planets"><li>List of Planets</li></Link>
            <Link style={navStyle} to='/fav'><li>Favourites</li></Link>
            </ul>
        </nav>
     );
}
 
export default Nav;