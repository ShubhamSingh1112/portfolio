import React, { Component } from 'react';
import Blobs from './additions/Blobs'; 

export default class Introsection extends Component {
  render() {
    return (
      <>
        <div className='banner'>
          <Blobs/>
          <div className='intro-content'>
            <h1>Hello I am Shubham Singh</h1>
            <p>I am a frontend Developer</p>
          </div>
        </div>
      </>
    )
  }
}
