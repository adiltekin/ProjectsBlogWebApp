import {Box, Typography} from '@mui/material'
import Navbar from '../components/Navbar'

function HomePage(props) {

  const {isLoggedIn} = props;


  return (
    <>
      <Navbar
        isLoggedIn = {isLoggedIn}
      />
      <Box
      sx={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
      >
        <Typography sx={{fontWeight: "bold", color:"#0E5E6F"}} component="h1" variant="h2">
              PROJECTS WEB APP
          </Typography>
      </Box>
    </>
    
  );
}

export default HomePage;
