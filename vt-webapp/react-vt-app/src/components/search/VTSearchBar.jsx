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
        const [tableCode, setTableCode] = useState();
        const [Virushash, setVirushash] = useState([]);
        const [error, setError] = useState("");
        let results;

        function createRow(name, detected, type) {
          return ({name, detected, type})
        }

        function updateTableRows(value) {
          const rows = []

          for(let key in value["scans"]) {
            rows.push(createRow(key, String(value["scans"][key]["detected"]), value["scans"][key]["result"]))
          }

          let tableRows = (rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.detected}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          )))

            setTableCode(
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Provider</TableCell>
                      <TableCell align="right">Detected</TableCell>
                      <TableCell align="right">Type</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableRows}
                  </TableBody>
                </Table>
              </TableContainer>
            )
        }
        
        const SearchVT = (Virushash) => {
          fetch(`http://localhost:5000/VTSearch/${Virushash}`)
          .then( resp => {
            results = resp.json()
            console.log(results)
            if(resp.status === 500) {
              console.log("Error somewhere w/ " + Virushash)
              results.then(value => {
                console.log("Error desc: " + value["error"])

                //Call displaying error data on page
                //Change default error text to error
                setError("Error: " + value["error"])
                setTableCode([])
              })

            } else if(resp.status === 200) {
              console.log("Success w/ " + Virushash)
              results.then(value => {
                console.log("Results: " + value["positives"] + "/" + value["total"])
              })

              //Call displaying successful data on page
              results.then(value => {
                updateTableRows(value)
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
                {tableCode}
          </>
        )
}

export default VTSearchBar