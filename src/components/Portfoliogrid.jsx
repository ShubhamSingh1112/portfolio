import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { projects } from "../api/projectdata";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
}));

export default function Portfoliogrid() {
  return (
    <>
      <Box maxWidth="xl" style={{ margin: 'auto', padding: '1rem', textAlign: 'center' }}>
        <h2 className="light" style={{ textAlign: 'center' }}>My Works</h2>
      </Box>
      <Box sx={{ flexGrow: 1 }} maxWidth="xl" style={{ margin: 'auto', padding: '0 1rem' }}>
        <Grid container spacing={2}>
          {projects.map(({ id, image, subtitle, title, link }) => {
            return (
              <Grid key={id} lg={4} md={6} sm={6} xs={12}>
                <Item>
                  <img
                    className="project-img"
                    src={image}
                    alt="content"
                  />
                  <h3>
                    {subtitle}
                  </h3>
                  <h2>
                    {title}
                  </h2>
                  <Button variant='contained'>
                    <Link className='light' to={link} target='_blank'>Go To Link</Link>
                  </Button>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box maxWidth="xl" sx={{ margin: 'auto', padding: '1rem', textAlign: 'center' }}>
        <Button variant='contained'>
          <Link to="/Portfolio" className='light'>See All Projects</Link>
        </Button>
      </Box>
    </>
  );
}
