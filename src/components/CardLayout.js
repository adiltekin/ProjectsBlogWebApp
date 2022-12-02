import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


function CardLayout(props) {

    const {imgUrl, imgName, projectName, projectId, projectDetail, component="img", height="140", isLoggedIn, setEditBtn, setId, setDeleteBtn, setDetail} = props
    
    
    return (
        <Grid item xs={4} sx={{
            mb:2,
            
            }}>
            <Card sx={{ 
                maxWidth: 340,
                height: 400, 
                backgroundColor:"#BCEAD5", 
                border: 3, 
                borderColor:"#8EC3B0", 
                borderRadius:"25px" 
                }}>
                <CardMedia
                component={component}
                alt={imgName}
                height={height}
                image={imgUrl}
                sx={{p:2, maxWidth: "90%"}}
                />
                <Grid container
                    direction="row" sx={{overflow:"hidden"}}>
                    <CardContent sx={{height:140}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {projectName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{height:"50px"}}>
                            {projectDetail}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CardActions >
                        <Button size="small" variant='outlined' onClick={() => {setId(projectId); setDetail(true)}} sx={{color:"#0E5E6F", borderRadius:5}}>Learn More</Button>
                        {isLoggedIn ? (<Button variant='outlined' size="small" onClick={() => {setEditBtn(true); setId(projectId)}} sx={{color:"#0E5E6F", borderRadius:5}}>
                        <EditIcon/>Edit</Button>) : null}

                        {isLoggedIn ? (<Button variant='outlined' size="small" onClick={() => {setDeleteBtn(true); setId(projectId)}} sx={{color:"#0E5E6F", borderRadius:5}}>
                        <DeleteForeverIcon/>Delete</Button>) : null}
                    </CardActions>
                </Grid>
                
                
            </Card>
        </Grid>

  )
}

export default CardLayout;