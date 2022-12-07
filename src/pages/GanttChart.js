import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Chart from "react-google-charts";
import { createAPIEndpoint } from '../api';
import Navbar from '../components/Navbar';


const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" }
];


function GanttChart(props) {

    const {isLoggedIn} = props;

    const [rows, setRows] = useState([])

    useEffect(()=> {
        const getData = async () => {
            const res = await createAPIEndpoint("Project").fetchAll("GetAllProjects")
            res.data.map((project) => (
                setRows(old => [...old, [
                        String(project.projectId),
                        project.projectName,
                        new Date(project.startDate),
                        new Date(project.endDate),
                        null,
                        100,
                        null
                    ]])
            ))
            res.data.map((project) => (
                console.log(project.endDate)
            ))
        }
        getData();        
    
    },[])



  return (
    <>
        <Navbar
            isLoggedIn = {isLoggedIn}
        />

        <Box
          sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
        >

            <Typography variant='h3' sx={{mb:10,fontWeight: "bold", color:"#0E5E6F"}}>Projects Start-End Date</Typography>

            <Chart
            chartType="Gantt"
            data={[columns, ...rows]}
            height="400px"
            width="100%"
            legendToggle
            />

        </Box>
        
    </>
  )
}

export default GanttChart
