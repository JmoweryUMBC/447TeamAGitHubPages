import React from 'react';
import styles from './VTSearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Button} from '@mui/material';
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
import SxProps from "@mui/material";
import { lightBlue } from '@mui/material/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Pie } from 'react-chartjs-2';
import {Chartjs, Tooltip, Title, ArcElement, Legend} from 'chart.js'
import { borderColor } from '@mui/system';

const VTSearchBar = () => {
        const [tableCode, setTableCode] = useState();
        const [Virushash, setVirushash] = useState([]);

        const [errorInfo, setErrorInfo] = useState([]);
        const [hashInfo, setHashInfo] = useState([])
        const [detectedData, setDetectedData] = useState("");
        const [totalSearches, settotalSearches] = useState(0);
        const [successSearches, setsuccessSearches] = useState(0);
        const [failedSearches, setfailedSearches] = useState(0);

        const tableContainer: SxProps = {
          border: '1px solid rgba(128,128,128,0.4)',
          width: "max-content",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 4,
          borderRadius: 2,
          maxHeight: 500
        };
        const primary = lightBlue[400];
        const secondary = lightBlue[200];
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
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
              <TableCell component="th" scope="row" sx={{backgroundColor: primary, borderBottom: "1px solid lightblue"  }}>{row.name} </TableCell>
              <TableCell align="center" sx={{backgroundColor: primary, borderBottom: "1px solid lightblue"}}>{row.detected} </TableCell>
              <TableCell align="right" sx={{backgroundColor: primary, borderBottom: "1px solid lightblue" }}>{row.type} </TableCell>
            </TableRow>
          )))

            setTableCode(
              <TableContainer component={Paper} sx={tableContainer}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader={true}>
                  <TableHead>
                    <TableRow >
                      <TableCell  sx={{backgroundColor: secondary, borderBottom: "0px", fontWeight: 'bold', fontSize: '25px'}} align="left">Provider</TableCell>
                      <TableCell  sx={{backgroundColor: secondary, borderBottom: "0px", fontWeight: 'bold', fontSize: '25px'}} align="center">Virus Detected</TableCell>
                      <TableCell  sx={{backgroundColor: secondary, borderBottom: "0px", fontWeight: 'bold', fontSize: '25px'}} align="right">Type</TableCell>
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
                setErrorInfo("Error: " + value["error"])
                setHashInfo("")
                setDetectedData('')
                setTableCode([])
                setfailedSearches(failedSearches +1)
                settotalSearches(totalSearches + 1)
                //setPiechartCode([])
              })

            } else if(resp.status === 200) {
              console.log("Success w/ " + Virushash)
              results.then(value => {
                console.log("Results: " + value["positives"] + "/" + value["total"])
                updateTableRows(value)
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
                  <div className = "Search_Input">
                    <input type="text" placeholder="Enter Hash Here" value={Virushash} onChange={e => setVirushash(e.target.value)}/>
                    <Button className = "Search_icon" endIcon= {<SearchIcon />} onClick ={() => SearchVT(Virushash)}></Button>
                  </div>
                </div>

                <div>
                  <p className= 'Resulthash'>{hashInfo}</p>
                </div>
                <div>
                  <p className= 'Resulthash'>{detectedData}</p>
                </div>
                <div className = "Reacttable">
                  {tableCode}
                </div>
          </>
        )
}

export default VTSearchBar