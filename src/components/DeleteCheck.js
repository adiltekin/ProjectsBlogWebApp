import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { createAPIEndpoint } from '../api';

function DeleteCheck(props) {

  const {setDeleteBtn, id} = props;
  const navigate = useNavigate();

  const deleteProject = () => {
    createAPIEndpoint("Project").delete(id, "DeleteProject")
    .then(() => setDeleteBtn(false))
    .then(() => navigate("/projects"))
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Grid container justifyContent='center' sx={{mb:3}}>
        <Grid item textAlign="center">
          <Typography variant='h4'>Are you sure?</Typography>
          <Typography>This item will be deleted.</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' textAlign="center" spacing={2}>
        <Grid item xs={3}>
          <Button variant='contained' fullWidth color='success' onClick={() => deleteProject()}>YES</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' fullWidth color='error' onClick={() => setDeleteBtn(false)}>NO</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default DeleteCheck