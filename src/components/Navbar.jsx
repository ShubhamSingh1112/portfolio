import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default class Navbar extends Component {
  render() {
    return (
      <Box
        sx={{
          width: '100%',
          top: '0',
          left: '0',
          position: 'sticky',
          height: 'auto',
          backgroundColor: 'rgba(200, 200, 200, 0.4)',
          backdropFilter: 'blur(10px)',
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center'
        }}
      >
        <Box sx={{ p: 1, display: 'flex', flex: '1', borderRight: '1px solid whitesmoke' }}>
          <Link className="light" to="/">Home</Link>
        </Box>
        <Box sx={{ p: 1, display: 'flex', flex: '1', borderRight: '1px solid whitesmoke' }}>
          <Box>
            <Link className="light" to="/About">About</Link>
          </Box>
          <Box>
            <Link className="light" to="/Portfolio">Portfolio</Link>
          </Box>
        </Box>
        <Box sx={{ p: 1, display: 'flex', flex: '1', borderRight: '1px solid whitesmoke' }}>
            <Link className='social-icons' to="https://www.facebook.com/profile.php?id=100003071391024"><MdFacebook/></Link>
            <Link className='social-icons' to="https://www.instagram.com/shubham_singh_0292/"><AiFillInstagram/></Link>
            <Link className='social-icons' to="https://www.linkedin.com/in/11shubhamsingh22/"><AiFillLinkedin/></Link>
        </Box>
        <Box sx={{ p: 1, display: 'flex', flex: '1' }}>
          <Link className="light" to="/Contact">Contact</Link>
        </Box>
      </Box>
    )
  }
}


