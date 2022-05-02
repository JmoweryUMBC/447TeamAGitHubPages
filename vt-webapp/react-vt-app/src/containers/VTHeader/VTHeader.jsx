import React from 'react';
import './VTHeader.css';
import virus from '../../images/viruslogo.png'

const VTHeader = () => {
    return (
        <div className = 'Home_header'>
            <div className='Home_header_padding' id='home'>
                <div className ='Home_header_content'>
                    <h1>VirusTotal API Hash Searching</h1>
                    <div className = "Home_input">
                        <input type="Virus Hash" placeholder="Enter Hash Here" />
                        <button type="button">Search</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VTHeader