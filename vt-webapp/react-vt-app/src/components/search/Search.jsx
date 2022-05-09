import React from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

const Search = () => {
    return (
    <div className = 'SearchBlock'>
            <div className = "Search_Input">
                    <input type="text" placeholder="Enter Hash Here" />
                    <Button className = "Search_icon" endIcon= {<SearchIcon />}></Button>
            </div>
    </div>
    )
}

export default Search
