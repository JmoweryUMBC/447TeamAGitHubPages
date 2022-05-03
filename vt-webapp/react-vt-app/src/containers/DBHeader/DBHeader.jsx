import React from 'react';
import './DBHeader.css';
import virus from '../../images/viruslogo.png'
import NotVirustext from '../../images/NotVirusText.png'

const DBHeader = () => {
    return (
        <div className = 'Home_header'>
            <img src={NotVirustext} alt= "VirusText"/>
        </div>
    )
}

export default DBHeader