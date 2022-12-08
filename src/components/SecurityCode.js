import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'



function SecurityCode(props) {

    const {setSecurity} = props;

    const [code, setCode] = useState("");
    const [alert, setAlert] = useState({state:false, content:"" , severity:""});
    const SecurityCode = "qwer123";
    
    const codeCheck = () => {
        if (code === SecurityCode) {
            setSecurity(true)
        }
        else {
            setSecurity(false);
            setAlert({
                state:true,
                content:"Incorrect security code!",
                severity:"error"
              })};
    }

    const handleInputChange = e => {
        setCode(e.target.value)
    }

  return (
    <Box
          sx={{
              marginTop: 18,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
      >
          <Typography component="h1" variant="h3">
              Security Code
          </Typography>
          <Box component="form" autoComplete="off" noValidate sx={{ mt: 4 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="securitycode"
                label="Security Code"
                type="password"
                id="securitycode"
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={codeCheck}
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              {alert.state ? <Alert severity={alert.severity}>{alert.content}</Alert> : null}
          </Box>
      </Box>
  )
}

export default SecurityCode