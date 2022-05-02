import React from 'react'
import './navbar.css';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import logo from '../../images/viruslogo.png'
const Menu = () => (
    <>
    <p><Link to="/">VirusTotal Search</Link></p>
    <p><Link to="/DBSearch">Database Search</Link></p>
    <p><Link to="/About">About</Link></p>
    </>
)

const navbar = () => {
    return (
    <div className = 'virus_navbar'>
        <div className = 'virus_navbar-links'>
            <div className="virus_logo" >
                <img src={logo} alt="logo" />
            </div>
            <div className = 'virus_navbar-links-container'>
                <Menu />
            </div>
            
        </div>
    </div>
    )
}

export default navbar

