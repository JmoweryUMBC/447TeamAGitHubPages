import React from 'react';
import './DBSearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { Button } from '@mui/material';

const DBSearchBar = () => {
        const [Virushash, setVirushash] = useState([]);
        const SearchVT = (Virushash) => {
          fetch(`http://localhost:5000/DBSearch/${Virushash}`)
        }

        return (
        <div className = 'SearchBlock'>
            <div className = "Search_Input">
                    <input type="text" placeholder="Enter Hash Here" value={Virushash} onChange={e => setVirushash(e.target.value)}/>
                    <Button className = "Search_icon" endIcon= {<SearchIcon />} onClick ={() => SearchVT(Virushash)}></Button>
            </div>
        </div>
    )
}

export default DBSearchBar
