import React from 'react';
import styles from './DBSearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { Button } from '@mui/material';
import { Input } from '@mui/material';

const DBSearchBar = () => {
        const [Virushash, setVirushash] = useState([]);
        const [hashInfo, setHashInfo] = useState([])
        const [detectedData, setDetectedData] = useState("");
        const [errorInfo, setErrorInfo] = useState([]);
        const [totalSearches, settotalSearches] = useState(0);
        const [successSearches, setsuccessSearches] = useState(0);
        const [failedSearches, setfailedSearches] = useState(0);
        let results;

        const SearchDB = (Virushash) => {
          fetch(`http://localhost:5000/DBSearch/${Virushash}`)
            .then( resp => {
              results = resp.json()
              console.log(results)

              if(resp.status === 500) {
                console.log("Error somewhere w/ " + Virushash)
                results.then(value => {
                  console.log("Error desc: " + value["error"])
                  setErrorInfo("Error: " + value["error"])
                  setHashInfo("")
                  setDetectedData("")
                  setfailedSearches(failedSearches +1)
                  settotalSearches(totalSearches + 1)
                })
              } else if(resp.status === 200) {
                console.log("Success w/ " + Virushash)
                results.then(value => {
                  //console.log("Results: " + value["positives"] + "/" + value["total"])
                  setErrorInfo("")
                  setHashInfo("Results For Hash: " + value["md5"])
                  setDetectedData("Malicious Detections: " + value["positives"] + "/" + value["total"])
                  settotalSearches(totalSearches + 1);
                  setsuccessSearches(successSearches +1);
                })
              }

            })
        }

  return (
    <>
    <div className ='SearchAnalytics'>
      <h1>Search Analytics</h1>
      <p>Total Searches: {totalSearches}</p>
      <p>Successful Searches: {successSearches}</p>
      <h2>Failed Searches: {failedSearches}</h2>
    </div>
    <div className= 'Hasherror'>
      <p>{errorInfo}</p>
    </div>
    <div className = 'SearchBlock'>
      <div className = 'Search_Input'>
        <input type="text" placeholder="Enter Hash Here" value={Virushash} onChange={e => setVirushash(e.target.value)}/>
        <Button className = "Search_icon" endIcon= {<SearchIcon />} onClick ={() => SearchDB(Virushash)}></Button>
      </div>
    </div>
    <div className= 'Hashinfo'>
      <p>{hashInfo}</p>
    </div>
    <div className= 'Hashvirusdata'>
      <p>{detectedData}</p>
    </div>
    
    </>
  )
}

export default DBSearchBar
