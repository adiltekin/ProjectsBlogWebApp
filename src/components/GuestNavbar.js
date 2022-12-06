import { Button, Stack } from '@mui/material';
import React from 'react'

function GuestNavbar() {
  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
        <Button href='/login' color="inherit">Login</Button>
        <Button href='/register' color="inherit">Register</Button>            
    </Stack> 
    
  )
}

export default GuestNavbar;