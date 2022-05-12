import React from 'react'
import './data.css';
import Data from './data.json';
const data = () => {
    return(
    <>
    <div className= 'posts'>
      { Data.map(post => {
          return (
            <>
            <h4>{ post.title}</h4>
            <p>{ post.content }</p>
            </>
          )
        })
      }
      </div>
    </>
    )
}
export default data
