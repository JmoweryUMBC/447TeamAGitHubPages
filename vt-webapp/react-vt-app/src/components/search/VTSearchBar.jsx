import React from 'react';
import './DBSearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useState, useEffect } from "react";
import { Form, Input } from 'semantic-ui-react';

const VTSearchBar = () => {
        const [hash, setHash] = useState('');
        return (
          <Form>
                <div className = 'SearchBlock'>
                  <div className = "Search_Input">
                  <Form.field>
                    <Input type="text" placeholder="Enter Hash Here" value={hash} onChange={e => setHash(e.target.value)}/>
                  </Form.field>
                  <Form.field>
                    <Button className = "Search_icon" endIcon= {<SearchIcon />} onClick ={async() => {
                        const response = await fetch('/VTSearch/<string:hashNum>', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(hash)
                        })
                        if(response.ok){
                                console.log('response worked')
                        }
                    }}> </Button>
                  </Form.field>
                  </div>
                </div>
          </Form>
        )
}

export default VTSearchBar