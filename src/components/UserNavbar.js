import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system'
import React from 'react'

const Logout = () => localStorage.setItem("adminId",0)

function UserNavbar() {
  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
        <Typography color="#0E5E6F"><strong>Admin</strong></Typography>    
        <Button href='http://localhost:3000/' onClick={Logout} color="inherit">Logout</Button>

    </Stack> 
  )
}

export default UserNavbar;