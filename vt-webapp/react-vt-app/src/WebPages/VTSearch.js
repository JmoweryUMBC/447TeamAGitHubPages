import React from 'react'
import {Data, Brand, Navbar, VTSearchBar} from '../components';
import VTHeader from '../containers/VTHeader/VTHeader';

function VTSearch() {
  return (
    <div>
      <Navbar />
      <VTHeader />
      <VTSearchBar />
    </div>
  );
}
export default VTSearch