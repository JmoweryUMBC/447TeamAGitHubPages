import { ScannerSharp } from '@material-ui/icons';
import React from 'react'
import {Navbar, VTSearchBar} from '../components';
import VTHeader from '../containers/VTHeader/VTHeader';

function VTSearch() {
  return (
    <>
      <Navbar />
      <VTHeader />
      <VTSearchBar />
    </>
  );
}
export default VTSearch