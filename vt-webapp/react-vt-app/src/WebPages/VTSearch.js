import React from 'react'
import {Data, Brand, Navbar, VTSearchBar} from '../components';
import VTHeader from '../containers/VTHeader/VTHeader';
import Datas from '../data.json';

function VTSearch() {
  return (
    <div>
      <Navbar />
      <VTHeader />
      <VTSearchBar />
      <div className= 'posts'>
      { Datas.map(post => {
          return (
            <>
            <h4>{ post.title}</h4>
            <p>{ post.content }</p>
            </>
          )
        })
      }
      </div>
    </div>
  );
}
export default VTSearch