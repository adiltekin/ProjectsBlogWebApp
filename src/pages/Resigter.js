import React, { useState } from 'react';
import {TextField, Box,Typography, Button, Alert} from '@mui/material';
import { createAPIEndpoint } from '../api/index';
import {useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Register() {

  const [values, setValues] = useState({username:"", password:""});
  const navigate = useNavigate();
  const [alert, setAlert] = useState({state:false, content:"" , severity:""},);
  const [error, setError] = useState({state:false, content:""})

  
  const Register = e => {
    e.preventDefault();
    if (values.username.length < 1){
      setError({
        state:true,
        content:"Username is required."
      })
    }
    else if (values.password.length < 1){
      setError({
        state:true,
        content:"Password is required."
      })
    }
    else if(values.username.length > 0 && values.password.length > 0){
      setError({
        state:false,
        content:""
      })
      createAPIEndpoint("AdminLogin").authenticate("NewAdmin", values)
      .then(res =>{
        setAlert({
          state:true,
          content:"Register success!",
          severity:"success"
        });
        setTimeout(function() {
          navigate("/");
        }, 500);
      })
      .catch(err => console.log(err));
    }
  }

  const handleInputChange = e => {
    const {name, value} = e.target;
        setValues({
          ...values,
          [name] : value
        });
        setAlert({state:false})
  }

  return (  
    <>
      <Navbar/>
      <Box
          sx={{
              marginTop: 18,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
      >
          <Typography component="h1" variant="h3">
              Admin Register
          </Typography>
          <Box component="form" autoComplete="off" noValidate sx={{ mt: 4 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={Register}
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              {alert.state ? <Alert severity={alert.severity}>{alert.content}</Alert> : null}
              {error.state ? <Alert severity="error">{error.content}</Alert> : null}
          </Box>
      </Box>
    </> 
    
  )
}