import React from 'react';
import './VTHeader.css';
import virus from '../../images/viruslogo.png'
import Virustext from '../../images/VirusTotalText.png'

const VTHeader = () => {
    return (
        <div className = 'Home_header'>
            <img src={Virustext} alt= "VirusText"/>
        </div>
    )
}

export default VTHeader