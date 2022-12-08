import React from 'react';
import { useState } from 'react';
import {TextField, Box,Typography, Button, Alert} from '@mui/material';
import { createAPIEndpoint } from '../api/index';
import {useNavigate} from 'react-router-dom';

export default function Login(props) {

  const [values, setValues] = useState({username:"", password:""});
  const navigate = useNavigate();
  const [alert, setAlert] = useState({state:false, content:"" , severity:""},);
  const [error, setError] = useState({state:false, content:""})
  const {setAdminId} = props;
  


  const Login = e => {
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
    
      createAPIEndpoint("AdminLogin").authenticate("Authentication", values)
      .then(res =>{
        if(res.data.isLogged === true){
          localStorage.setItem("adminId", res.data.adminId)
          setAlert({
            state:true,
            content:"Login success!",
            severity:"success"
          });
          setAdminId(localStorage.getItem("adminId"))
          setTimeout(function() {
            navigate("/");
          }, 500);
          
        }
        else if(res.data.isLogged === false){
          setAlert({
            state:true,
            content:"Incorrect username or password!",
            severity:"error"
          });
        }
      })
      .catch(err => console.log(err) && console.log(values));
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
      <Box
          sx={{
              marginTop: 18,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
      >
          <Typography component="h1" variant="h3">
              Admin Login
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
                onClick={Login}
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              {alert.state ? <Alert severity={alert.severity}>{alert.content}</Alert> : null}
              {error.state ? <Alert severity="error">{error.content}</Alert> : null}
          </Box>
      </Box>
    </>
    
  )
}
