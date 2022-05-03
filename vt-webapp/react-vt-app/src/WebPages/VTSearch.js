import React from 'react'
import {CTA, Brand, Navbar, Search} from '../components';
import VTHeader from '../containers/VTHeader/VTHeader';

function VTSearch() {
  return (
    <div>
      <Navbar />
      <VTHeader />
      <Search />
    </div>
  );
}
export default VTSearch