import React from 'react';
import './DBHeader.css';
import virus from '../../images/viruslogo.png'

const DBHeader = () => {
    return (
        <div className = 'Home_header'>
            <div className='Home_header_padding' id='home'>
                <div className ='Home_header_content'> 
                    <h1>Database Hash Searching</h1>
                    <div className = "Home_input">
                        <input type="Virus Hash" placeholder="Enter Hash Here" />
                        <button type="button">Search</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DBHeader