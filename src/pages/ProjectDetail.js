import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DetailLayout from '../components/DetailLayout';


function ProjectDetail(props) {
    
    const {isLoggedIn} = props;
    const location = useLocation();
    const[render, setRender] = useState();
    const id = location.state.id.id
    useEffect(() => {
        setRender(true)
    },[location.state.id])

    

    return (render ? (
    <>
        <DetailLayout 
            isLoggedIn = {isLoggedIn}
            id = {id}
        />
        
    </>
    ) : null)

}

export default ProjectDetail