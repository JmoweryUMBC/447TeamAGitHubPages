import { ScannerSharp } from '@material-ui/icons';
import React from 'react'
import {Data, Brand, Navbar, VTSearchBar} from '../components';
import VTHeader from '../containers/VTHeader/VTHeader';
import Datas from '../data.json';
import Virusinfo from '../example.json'

function VTSearch() {
  return (
    <>
      <Navbar />
      <VTHeader />
      <VTSearchBar />
      <Data />
    </>
  );
}
export default VTSearch