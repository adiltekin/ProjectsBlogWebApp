import { Button, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Container } from '@mui/system';
import { createAPIEndpoint } from '../api';
import Popup from './Popup';
import DeleteCheck from './DeleteCheck';
import EditProject from '../pages/EditProject';
import { useNavigate } from 'react-router-dom';

function DetailLayout(props) {

    const {id, component="img", height="250", isLoggedIn} = props

    const [deleteBtn,setDeleteBtn] = useState(false);
    const [editBtn, setEditBtn] = useState(false);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        projectId : 0,
        projectName: "",
        projectDetail: "",
        projectContent: "",
        imgName: "",
        imgUrl: "" 
    });

    useEffect(() => {
    
        createAPIEndpoint("Project").fetchById(id, "GetProject")
        .then(res => {
            setValues({
                projectId : res.data.projectId,
                projectName: res.data.projectName,
                projectDetail: res.data.projectDetail,
                projectContent: res.data.projectContent,
                imgName: res.data.imgName,
                imgUrl: res.data.imgUrl 
            })
        })
        .catch(err => console.log(err))
    },[id, setValues])

  return (

    <Container sx={{
        mt:7, 
        mb:5,
        backgroundColor:"#B9E0FF",
        border: 5, 
        borderColor:"#8EC3B0", 
        borderRadius:"20px",
    }}>
        <Grid container sx={{justifyContent:"center"}}>
            <Grid item xs={10} sx={{
                mb:1,
                }}>
                <CardMedia
                component={component}
                alt={values.imgName}
                height={height}
                image={values.imgUrl}
                sx={{p:5, maxWidth:"500px", mx:"auto"}}
                />
            </Grid>

            <Grid item xs={4} sx={{textAlign:"center", mb:4}}>
                <Typography gutterBottom variant="h4" component="div" sx={{color:"#0E5E6F", fontWeight:"bold"}}>
                    {values.projectName}
                </Typography>
            </Grid>
        </Grid>
      
        <Grid container sx={{justifyContent:"center"}}>
    
            <Grid item xs={10} sx={{mb:5}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color:"#0E5E6F", fontWeight:"bold"}}>Detail</Typography>
                <Typography variant="body2" color="text.secondary">
                    {values.projectDetail}
                </Typography>
            </Grid>
            
            <Grid item xs={10} sx={{mb:5}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color:"#0E5E6F", fontWeight:"bold"}}>Content</Typography>
                <Typography variant="body2" color="text.secondary">
                    {values.projectContent}
                </Typography>
            </Grid>
        
        </Grid>

        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{mb:2}}>
                <Grid item xs={2} sx={{textAlign:"center"}}>
                    <Button size="small" variant='outlined' onClick={() => navigate("/projects")} sx={{color:"#0E5E6F", borderRadius:5}}>Other Projects</Button>
                </Grid>
                
                {isLoggedIn ? <Grid item xs={2} sx={{textAlign:"center"}}><Button variant='outlined' size="small" onClick={() => setEditBtn(true)} sx={{color:"#0E5E6F", borderRadius:5}}>
                <EditIcon/>Edit</Button> </Grid> : null }
            
            
                {isLoggedIn ? <Grid item xs={2} sx={{textAlign:"center"}}><Button variant='outlined' size="small" onClick={() => setDeleteBtn(true)} sx={{color:"#0E5E6F", borderRadius:5}}>
                <DeleteForeverIcon/>Delete</Button></Grid> : null}
                
        </Grid>

        {editBtn ? (
            <Popup trigger={editBtn} >
              <EditProject setTrigger={setEditBtn} id={id}/>
            </Popup>
          ) : null}

        {deleteBtn ? (
            <Popup trigger={deleteBtn} >
              <DeleteCheck setDeleteBtn={setDeleteBtn} id={id} />
            </Popup>
        ) : null}

    </Container>

    

  )
}

export default DetailLayout