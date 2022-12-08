import { Button, Grid, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useState } from 'react';
import DatePickerComponent from './DatePickerComponent';

function ProjectForm(props) {

  const{setTrigger, submitBtn, setValues, values} = props;

  const[startDate, setStartDate] = useState(values.startDate);
  const[endDate, setEndDate] = useState(values.endDate);
  
  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
        ...values,
        [name] : value
    });
  }

  const inputDate = () => {
    setValues({
      ...values,
      "startDate":startDate, 
      "endDate":endDate})
  }

  return (
    <Container sx={{backgroundColor:"white"}}>

      <Grid container alignItems={"center"} justifyContent="flex-end">
        <Grid item sx={{mt:4,textAlign: "center"}} xs={4}>
          <Typography variant='h4'>Create Project</Typography>
        </Grid>
        <Grid item sx={{mt:2, textAlign: "end"}} xs={4}>
          <Button onClick={() => setTrigger(false)} size='large' >X</Button>
        </Grid>
      </Grid>
      
      <Grid container spacing={2} sx={{mt:1,p:2}} alignItems={"center"}>
        
        <Grid item xs={4} sx={{p:2}}>
          <TextField label="Project Name" defaultValue={values.projectName} name='projectName' variant="outlined" onChange={handleInputChange} sx={{width:"100%", mb:1.5}} />
          <TextField label="Image URL (500x250)" defaultValue={values.imgUrl} name='imgUrl' placeholder="https://" onChange={handleInputChange} variant="outlined" sx={{width:"100%", mb:1.5}} />
          <TextField label="Image Name" defaultValue={values.imgName} name='imgName' variant="outlined" onChange={handleInputChange} sx={{width:"100%"}} />
        </Grid>

        <Grid item xs={4} sx={{p:2}}>
          <TextField rows={7} multiline defaultValue={values.projectDetail} name='projectDetail' label="Project Detail" onChange={handleInputChange} variant="outlined" sx={{width:"100%"}} />
        </Grid>

        <Grid item xs={4} sx={{p:2}}  >
          <TextField rows={7} multiline defaultValue={values.projectContent} name='projectContent' label="Project Content" onChange={handleInputChange} variant="outlined" sx={{width:"100%"}} />
        </Grid>

        <Grid item xs={4} sx={{p:2}}  >
          <DatePickerComponent
          label="Start Date"
          name="startDate"
          date={startDate}
          setDate={setStartDate}
          handleInputChange={handleInputChange}
          inputDate={inputDate}
          />
        </Grid>
        
        <Grid item xs={4} sx={{p:2}}  >
          <DatePickerComponent 
          label="End Date"
          name="endDate"
          date={endDate}
          setDate={setEndDate}
          handleInputChange={handleInputChange}
          inputDate={inputDate}
          />
        </Grid>


        <Grid item xs={4}>
          <Button sx={{width:"100%"}} color="success" onClick={submitBtn} type='submit' variant='contained'>Submit</Button>
        </Grid>
        

      </Grid>

    </Container>
  )
}

export default ProjectForm