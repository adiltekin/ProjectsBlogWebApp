import React from 'react'
import {Box, AppBar, Toolbar, Button, Grid} from '@mui/material'
import UserNavbar from './UserNavbar';
import GuestNavbar from './GuestNavbar';

function Navbar(props) {

  const {isLoggedIn} = props;

  return (
    <Box sx={{ flexGrow: 1, mb:3 }} >
          <AppBar position="static" sx={{backgroundColor: "#8EC3B0", p:1}}>
            <Toolbar>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Button href='/' color="inherit">Home</Button>
                  <Button href='/Projects' color="inherit">Projects</Button>
                  <Button href='/Ganttchart' color="inherit">GanttChart</Button>
                </Grid>
                
                <Grid item xs={2} > 
                  {isLoggedIn ? <UserNavbar/> : <GuestNavbar/>}
                </Grid>
              </Grid>
            
            </Toolbar>
          </AppBar>
        </Box>
  )
}

export default Navbar;