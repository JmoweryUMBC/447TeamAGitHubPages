import React from 'react';
import './DBSearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

const VTSearchBar = () => {
    return (
    <div className = 'SearchBlock'>
            <div className = "Search_Input">
                    <input type="text" placeholder="Enter Hash Here" />
                    <Button className = "Search_icon" endIcon= {<SearchIcon />}></Button>
            </div>
    </div>
    )
}

export default VTSearchBar