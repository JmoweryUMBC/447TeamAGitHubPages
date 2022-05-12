import React from 'react'
import {Data, Brand, Navbar, DBSearchBar} from '../components';
import DBHeader from '../containers/DBHeader/DBHeader';

function DBSearch() {
  return (
    <div>
      <Navbar />
      <DBHeader />
      <DBSearchBar />
    </div>
  );
}
export default DBSearch