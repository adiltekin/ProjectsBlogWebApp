import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { createAPIEndpoint } from '../api';
import CardLayout from '../components/CardLayout';
import DeleteCheck from '../components/DeleteCheck';
import Navbar from '../components/Navbar';
import Popup from '../components/Popup';
import CreateProject from './CreateProject';
import EditProject from './EditProject';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';





function Projects(props) {

  const {isLoggedIn} = props;
  const [createBtn, setCreateBtn] = useState();
  const [editBtn, setEditBtn] = useState();
  const [projectList, setProjectList] = useState([]);
  const [id, setId] = useState();
  const [deleteBtn, setDeleteBtn] = useState();
  const navigate = useNavigate();
  const [detail, setDetail] = useState();


  useEffect(() => {
    createAPIEndpoint("Project").fetchAll("GetAllProjects")
    .then(res => {
      setProjectList(res.data)
    })
    .catch(err => console.log(err))
  }, [editBtn,createBtn,deleteBtn]);
  
  

  
  useEffect(() => {
    if(detail){
      navigate("/projectdetail",{state:{id:{id}}})
    }  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[detail])
  

  return (
    <>
        <Navbar 
          isLoggedIn = {isLoggedIn}
        />
        <Grid container justifyContent="center">
          <Typography sx={{fontWeight: "bold", color:"#0E5E6F"}} variant="h3">PROJECTS</Typography>
        </Grid> 
        <Container sx={{backgroundColor:"#DEF5E5"}}>
          <Grid container spacing={3} sx={{
            mt:3,
            p:2
            }}
          >

            {
              projectList.map((project, index) => (
                <CardLayout
                  key={index}
                  projectName = {project.projectName}
                  projectDetail = {project.projectDetail}
                  projectContent = {project.projectContent}
                  imgUrl = {project.imgUrl}
                  imgName = {project.imgName}
                  isLoggedIn = {isLoggedIn}
                  projectId = {project.projectId}
                  setEditBtn = {setEditBtn}
                  setId= {setId}
                  setDeleteBtn = {setDeleteBtn}
                  setDetail = {setDetail}
                />
              ))
            }
                   

            <Grid item xs={4} sx={{ justifyContent: "center", textAlign:"center", mt:"auto", mb:"auto"}}>
              {isLoggedIn ? <Button variant='contained' color='success' 
              sx={{width:70, height:70, borderRadius:20}} onClick={() => setCreateBtn(true)} >
                <AddIcon/>
              </Button> : null}
            </Grid>

          </Grid>

          {createBtn ? (
            <Popup trigger={createBtn} >
              <CreateProject setTrigger={setCreateBtn}/>
            </Popup>
          ) : null}
          
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

    </>
    );
}

export default Projects;