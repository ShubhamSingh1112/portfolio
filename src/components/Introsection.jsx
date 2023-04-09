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
            <p> Hello There! I'm Shubham Singh</p>
            <h1>Frontend Developer</h1>
            <p>An innovative Frontend Developer with a passion for user experience and a knack for bringing designs to life. Having worked on over 100 live projects, my collaborative approach and deadline speciality ensure innovative and efficient results that exceed expectations.</p>
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
