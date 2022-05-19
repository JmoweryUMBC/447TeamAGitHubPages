import React from 'react'
import {Navbar, DBSearchBar} from '../components';
import DBHeader from '../containers/DBHeader/DBHeader';

function DBSearch() {
  return (
    <>
      <Navbar />
      <DBHeader />
      <DBSearchBar />
    </>
  );
}
export default DBSearch