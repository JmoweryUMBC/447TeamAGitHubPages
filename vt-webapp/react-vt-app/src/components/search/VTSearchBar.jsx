import React from 'react';
import './VTSearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useState, useEffect } from "react";
import APIServices from './APIServices';
const VTSearchBar = () => {
        const [hash, setHash] = useState([]);
        const Search = (Virushash) => {
          setHash(Virushash)
          APIServices.SearchHash(hash)
          .then(resp => console.log(resp))
          .catch(error => console.log(error))
        }
        
        return (
                <div className = 'SearchBlock'>
                  <div className = "Search_Input">
                    <input type="text" placeholder="Enter Hash Here" value={hash} onChange={e => setHash(e.target.value)}/>
                    <Button className = "Search_icon" endIcon= {<SearchIcon />} onClick ={() => Search(hash)}></Button>
                  </div>
                </div>
        )
}

export default VTSearchBar