import React from 'react'
import './data.css';
import Virusinfo from './example.json'
const data = () => {
    return(
    <>
    <section>
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
          <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0"></table>
              <tbody>
              <tr>
                <td>Bkav</td>
                if({Virusinfo["scans"]["Bkav"]["detected"]}){
                  <td>True</td>
                }
                else{
                  <td>False</td>
                }
                <td>{Virusinfo["scans"]["Bkav"]["version"]}</td>
                <td>{Virusinfo["scans"]["Bkav"]["result"]}</td>
                <td>{Virusinfo["scans"]["Bkav"]["update"]}</td>
              </tr>
              <tr>
                <td>Lionic</td>
                <td>{Virusinfo["scans"]["Lionic"]["detected"]}</td>
                <td>{Virusinfo["scans"]["Lionic"]["version"]}</td>
                <td>{Virusinfo["scans"]["Lionic"]["result"]}</td>
                <td>{Virusinfo["scans"]["Lionic"]["update"]}</td>
              </tr>
              <tr>
                <td>MicroWorld-eScan</td>
                <td>{Virusinfo["scans"]["MicroWorld-eScan"]["detected"]}</td>
                <td>{Virusinfo["scans"]["MicroWorld-eScan"]["version"]}</td>
                <td>{Virusinfo["scans"]["MicroWorld-eScan"]["result"]}</td>
                <td>{Virusinfo["scans"]["MicroWorld-eScan"]["update"]}</td>
              </tr>
              <tr>
                <td>FireEye</td>
                <td>{Virusinfo["scans"]["FireEye"]["detected"]}</td>
                <td>{Virusinfo["scans"]["FireEye"]["version"]}</td>
                <td>{Virusinfo["scans"]["FireEye"]["result"]}</td>
                <td>{Virusinfo["scans"]["FireEye"]["update"]}</td>
              </tr>
              <tr>
                <td>CAT-QuickHeal</td>
                <td>{Virusinfo["scans"]["CAT-QuickHeal"]["detected"]}</td>
                <td>{Virusinfo["scans"]["CAT-QuickHeal"]["version"]}</td>
                <td>{Virusinfo["scans"]["CAT-QuickHeal"]["result"]}</td>
                <td>{Virusinfo["scans"]["CAT-QuickHeal"]["update"]}</td>
              </tr>
              <tr>
                <td>McAfee</td>
                <td>{Virusinfo["scans"]["McAfee"]["detected"]}</td>
                <td>{Virusinfo["scans"]["McAfee"]["version"]}</td>
                <td>{Virusinfo["scans"]["McAfee"]["result"]}</td>
                <td>{Virusinfo["scans"]["McAfee"]["update"]}</td>
              </tr>
              <tr>
                <td>Cylance</td>
                <td>{Virusinfo["scans"]["Cylance"]["detected"]}</td>
                <td>{Virusinfo["scans"]["Cylance"]["version"]}</td>
                <td>{Virusinfo["scans"]["Cylance"]["result"]}</td>
                <td>{Virusinfo["scans"]["Cylance"]["update"]}</td>
              </tr>
              <tr>
                <td>Zillya</td>
                <td>{Virusinfo["scans"]["Zillya"]["detected"]}</td>
                <td>{Virusinfo["scans"]["Zillya"]["version"]}</td>
                <td>{Virusinfo["scans"]["Zillya"]["result"]}</td>
                <td>{Virusinfo["scans"]["Zillya"]["update"]}</td>
              </tr>
              <tr>
                <td>Paloalto</td>
                <td>{Virusinfo["scans"]["Paloalto"]["detected"]}</td>
                <td>{Virusinfo["scans"]["Paloalto"]["version"]}</td>
                <td>{Virusinfo["scans"]["Paloalto"]["result"]}</td>
                <td>{Virusinfo["scans"]["Paloalto"]["update"]}</td>
              </tr>
              <tr>
                <td>Sangfor</td>
                <td>{Virusinfo["scans"]["Sangfor"]["detected"]}</td>
                <td>{Virusinfo["scans"]["Sangfor"]["version"]}</td>
                <td>{Virusinfo["scans"]["Sangfor"]["result"]}</td>
                <td>{Virusinfo["scans"]["Sangfor"]["update"]}</td>
              </tr>
              </tbody>
          </div>
        </div>
      </section>
    </>
    )
}
export default data
