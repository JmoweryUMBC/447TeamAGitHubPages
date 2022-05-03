import React from 'react';
import './Search.css';

const Search = () => {
    return (
    <div className = 'SearchBlock'>
            <div className = "Search_Input">
                    <input type="Virus Hash" placeholder="Enter Hash Here" />
                    <button type="button">Search</button> 
            </div>
    </div>
    )
}

export default Search
