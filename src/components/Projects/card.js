import React from 'react';
import '../../assets/css/style.css';

export default function Card(props) {
    return (
    <div className="container">
        <div className="card-img">
            <img
                className="card-img-top"
                src={props.img}
            />
        </div>
        <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <p className="card-text">{props.description}</p>
            <br/>
            <p className="card-text">{props.tech}</p>
            <br/>
            
            <div className="deploy-btn">
                <a href={props.github} target="_blank" className='project-icon'><i class="fa-brands fa-github"></i></a>
                <a href={props.app} target="_blank" className='project-icon'><i class="fa-solid fa-power-off"></i></a>
            </div>
        </div>
    </div>
    )
}