import { Button, Stack } from '@mui/material';
import React from 'react'

function GuestNavbar() {
  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
        <Button href='http://localhost:3000/login' color="inherit">Login</Button>
        <Button href='http://localhost:3000/register' color="inherit">Register</Button>            
    </Stack> 
    
  )
}

export default GuestNavbar;