import React from 'react'
import {Data, Navbar, DBSearchBar} from '../components';
import DBHeader from '../containers/DBHeader/DBHeader';
import Virusinfo from '../example.json'

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