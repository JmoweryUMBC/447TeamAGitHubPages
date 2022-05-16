import React from 'react'
import { useState, useEffect } from "react";
import './cta.css';
import Virusinfo from './example.json'

const cta = () => {
    /*
    const [data, filedata] = useState({
      md5: '',
      positives: '',
      total: '',
      scans: {
        web1: {
          detected: '',
          version: '',
          result: '',
          update: '',
        },
        web2: {
          detected: '',
          version: '',
          result: '',
          update: '',
        }
      },
    })
    
    useEffect (() => {
      fetch("/VTSearch/<string:hashNum>").then((res) =>
        res.json().then((data) => {
          filedata({
            md5: data.md5,
            positives: data.positives,
            total: data.total,
            scans: {
              web1: {
                detected: String(data.scans.Bkav.detected),
                version: data.scans.Bkav.version,
                result: data.scans.Bkav.result,
                update:data.scans.Bkav.update,
              },
              web2: {
                detected: String(data.scans.Lionic.detected),
                version: data.scans.Lionic.version,
                result: data.scans.Lionic.result,
                update:data.scans.Lionic.update,
              }
            }
          })
        })
      )
    }, []);
*/
    return (
        <>
        <div className= 'table'>
          <h1>{ Virusinfo["md5"] }</h1>
          <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
              <tr>
                <th>Scans</th>
                <th>Detected</th>
                <th>Version</th>
                <th>Result</th>
                <th>Update</th>
              </tr>
              </thead>
            </table>
          </div>
        </div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0"></table>
              <tbody>

              </tbody>
        </div>

        </>
    )
}

export default cta
