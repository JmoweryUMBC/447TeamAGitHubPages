import React from 'react';
import './header.css';
import virus from '../../images/viruslogo.png'

const Header = () => {
    return (
        <div className = 'Home_header'>
            <div className='Home_header_padding' id='home'>
                <div className ='Home_header_content'> 
                    <div className = "Home_input">
                        <input type="Virus Hash" placeholder="Enter Hash Here" />
                        <button type="button">Search</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header