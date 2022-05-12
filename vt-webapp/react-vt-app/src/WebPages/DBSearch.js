import React from 'react'
import {CTA, Brand, Navbar, Search} from '../components';
import DBHeader from '../containers/DBHeader/DBHeader';

function DBSearch() {
  return (
    <div>
      <Navbar />
      <DBHeader />
      <DBSearch />
    </div>
  );
}
export default DBSearch