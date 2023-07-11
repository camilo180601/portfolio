import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { works } from '../data/works'


const Project = () => {

    const params = useParams();
    const [project, setProject] = useState({});

    useEffect(()=>{
        const project = works.filter(work => work.id === params.id);
        setProject(project[0]);
    }, [])


    return (
        <div className='page page-work'>
            <div className='mask'>
              <img src={'/images/'+project.id+'.png'} />
            </div>
            <h1 className='heading'>{project.name}</h1>
            <p>{project.technologies}</p>
            <p>{project.description}</p>
            <a href={project.url} target='_blank'>Go to the project</a>
        </div>
    )
}

export default Project