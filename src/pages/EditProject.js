import React, {useEffect, useState } from 'react'
import { createAPIEndpoint } from '../api';
import ProjectForm from '../components/ProjectForm';

function EditProject(props) {

const{setTrigger, id} = props;
const[render, setRender] = useState(false);

const[values, setValues] = useState({
    projectId : 0,
    projectName: "",
    projectDetail: "",
    projectContent: "",
    imgName: "",
    imgUrl: "" 
});

const submit = e => {
  createAPIEndpoint("Project").update(id,"EditProject", values)
  .then(() => setTrigger(false))
  .catch(err => console.log(err));
}

useEffect(() => {
    createAPIEndpoint("Project").fetchById(id, "GetProject")
    .then(res => {    
        setValues({
            projectId: res.data.projectId,
            projectName: res.data.projectName,
            projectDetail: res.data.projectDetail,
            projectContent: res.data.projectContent,
            imgUrl: res.data.imgUrl,
            imgName: res.data.imgName,
        });
        setRender(true);
})       
    .catch(err=> console.log(err))    
},[id]);


  return (render ? (
    <ProjectForm
      values = {values}
      setTrigger = {setTrigger}
      submitBtn= {submit}
      setValues= {setValues}
    />  ) : null)

}

export default EditProject