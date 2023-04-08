import React, { Component } from 'react';
import Blobs from './additions/Blobs';

export default class Introsection extends Component {
  render() {
    return (
      <>
        <div className='banner'>
          <Blobs />
          <div className='intro-content'>
            <h1>Frontend Developer</h1>
            <p>I'm Shubham Singh, a Frontend Developer with expertise in UX research and a keen eye for UI design. With over 100 live projects under my belt, I'm a creative problem-solver who delivers exceptional user experiences. My collaborative approach and deadline speciality ensure innovative and efficient results that exceed expectations.</p>
          </div>
        </div>
      </>
    )
  }
}
