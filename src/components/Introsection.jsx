import React, { Component } from 'react';
import Blobs from './additions/Blobs';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default class Introsection extends Component {
  render() {
    return (
      <>
        <div className='banner'>
          <Blobs />
          <div className='intro-content'>
            <h1>Frontend Developer</h1>
            <p>I'm Shubham Singh, a Frontend Developer with expertise in UI design. I'm a creative problem-solver who delivers exceptional user experiences. Having worked on over 100 live projects, my collaborative approach and deadline speciality ensure innovative and efficient results that exceed expectations.</p>
            <Button variant="contained">
              <Link className='light' to='/portfolio'>Portfolio &gt;</Link>
            </Button>
            <Button variant="contained">
              <Link className='light' to='/portfolio'>Resume &gt;</Link>
            </Button>
          </div>
        </div>
      </>
    )
  }
}
