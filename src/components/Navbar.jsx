import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillCodepenCircle } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default class Navbar extends Component {
  render() {
    return (
      <Box
        sx={{
          width: '100%',
          top: '0',
          left: '0',
          position: 'sticky',
          zIndex: '1000',
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
          <Link className="light link" to="/">Home</Link>
        </Box>
        <Box sx={{ p: 1, display: 'flex', flex: '1', borderRight: '1px solid whitesmoke' }}>
          <Box>
            <Link className="light link" to="/About">About</Link>
          </Box>
          <Box>
            <Link className="light link" to="/Portfolio">Portfolio</Link>
          </Box>
        </Box>
        <Box sx={{ p: 1, display: 'flex', flex: '1', borderRight: '1px solid whitesmoke' }}>
            <Link className='social-icons' target='_blank' to="https://www.linkedin.com/in/11shubhamsingh22/"><AiFillLinkedin/></Link>
            <Link className='social-icons' target='_blank' to="https://github.com/ShubhamSingh1112/"><AiFillGithub/></Link>
            <Link className='social-icons' target='_blank' to="https://www.behance.net/shubhamsingh90"><AiFillBehanceCircle/></Link>
            <Link className='social-icons' target='_blank' to="https://codepen.io/shubhamsingh718356"><AiFillCodepenCircle/></Link>
            <Link className='social-icons' target='_blank' to="https://www.instagram.com/shubham_singh_0292/"><AiFillInstagram/></Link>
            <Link className='social-icons' target='_blank' to="https://www.facebook.com/profile.php?id=100003071391024"><MdFacebook/></Link>
        </Box>
        <Box sx={{ p: 1, display: 'flex', flex: '1' }}>
          <Link className="light link" to="/Contact">Contact</Link>
        </Box>
      </Box>
    )
  }
}


