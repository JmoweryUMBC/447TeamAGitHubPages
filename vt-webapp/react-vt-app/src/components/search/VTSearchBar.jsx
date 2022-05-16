import React from 'react';
import './VTSearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useState, useEffect } from "react";
import APIServices from './APIServices';
//import {Text} from 'react-native';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const VTSearchBar = () => {
        const rows = []
        const [tableRows, setTableRows] = useState([]);
        const [Virushash, setVirushash] = useState([]);
        const [error, setError] = useState("");
        let results;

        function createRow(name, detected, type) {
          rows.push({name, detected, type})
        }
        
        const SearchVT = (Virushash) => {
          fetch(`http://localhost:5000/VTSearch/${Virushash}`)
          .then( resp => {
            results = resp.json()
            if(resp.status == 500) {
              console.log("Error somewhere w/ " + Virushash)
              results.then(value => {
                console.log("Error desc: " + value["error"])

                //Call displaying error data on page
                //Change default error text to error
                setError("Error: " + value["error"])

              })
              console.log(results)

            } else if(resp.status == 200) {
              console.log("Success w/ " + Virushash)
              results.then(value => {
                console.log("Results: " + value["positives"] + "/" + value["total"])
              })
              console.log(results)

              //Call displaying successful data on page
              results.then(value => {
                for(let key in value["scans"]) {
                  console.log("Website: " + key + "  Detected: " + value["scans"][key]["detected"])
                  //createRow(key, value["scans"][key]["detected"], value["scans"][key]["result"])
                  createRow("RandomWebsite", true, "Win32.Ramnit.N")
              }
                setTableRows(rows)
              })

            }
          })
        }

        return (
          <>
                <div className = 'SearchBlock'>
                  <div className = "Search_Input">
                    <input type="text" placeholder="Enter Hash Here" value={Virushash} onChange={e => setVirushash(e.target.value)}/>
                    <Button className = "Search_icon" endIcon= {<SearchIcon />} onClick ={() => SearchVT(Virushash)}></Button>
                  </div>
                </div>
          </>
        )
}

export default VTSearchBar