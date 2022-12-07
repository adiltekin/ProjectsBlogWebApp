import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Register from '../pages/Resigter'
import GanttChart from './GanttChart'
import ProjectDetail from './ProjectDetail'
import Projects from './Projects'

function AppRouter() {

    const [adminId, setAdminId] = useState();
    let isLoggedIn;

    useEffect(() => {
        setAdminId(localStorage.getItem("adminId"));
      }, [adminId]
    );


    adminId > 0 ? isLoggedIn=true : isLoggedIn=false
    

  return (

    

    <BrowserRouter>
        <Routes>

        
        
        <Route path='/' element={
            <HomePage
            {...{
                    isLoggedIn,
                    adminId,
                    setAdminId
                    }}
            />
        }/>

        <Route path='/login' element={
            <Login 
                {...{
                    isLoggedIn,
                    adminId,
                    setAdminId
                    }}
            />
        }/>

        <Route path='/register' element={
            <Register />
        }/> 

        <Route path='/projects' element={
            <Projects
            {...{
                    isLoggedIn,
                    adminId,
                    setAdminId
                    }}
            />
        }/> 

        <Route path='/projectdetail' element={
            <ProjectDetail 
            {...{
                    isLoggedIn,
                    adminId,
                    setAdminId
                    }}
            />
        }/> 

        <Route path='/ganttchart' element={
            <GanttChart 
            {...{
                    isLoggedIn,
                    adminId,
                    setAdminId
                    }}
            />
        }/> 

        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter