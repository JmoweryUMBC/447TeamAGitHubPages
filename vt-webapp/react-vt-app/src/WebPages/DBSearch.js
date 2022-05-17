import React from 'react'
import {Navbar, DBSearchBar} from '../components';
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