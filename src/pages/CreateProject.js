import React, { useState } from 'react'
import { createAPIEndpoint } from '../api';
import ProjectForm from '../components/ProjectForm';



function CreateProject(props) {

const{setTrigger} = props;


const [values, setValues] = useState({
  projectName: "",
  projectDetail: "",
  projectContent: "",
  imgName: "",
  imgUrl: "",
  startDate: new Date(),
  endDate: new Date(),
});


const submit = e => {
  e.preventDefault();
  createAPIEndpoint("Project").create("PostProject", values)
  .then(console.log(values))
  .then(() => setTrigger(false))
  .catch(err => console.log(err));
}



  return (
    <ProjectForm
      {...{values,
      setValues,
      setTrigger
      }}
      submitBtn= {submit}
    />
  )
}

export default CreateProject;