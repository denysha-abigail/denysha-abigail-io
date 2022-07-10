import React from 'react';
import Card from './card';
import { projects } from './indexData';

export default function Projects() {
    return (
        <div>
            {
            projects.map(project => {
                return (<Card img={project.img} name={project.name} description={project.description} tech={project.tech} github={project.github} app={project.app}/>)
            })
        }
        </div>
    )
}