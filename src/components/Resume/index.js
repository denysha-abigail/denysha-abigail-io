import React from 'react';
import resumeImg from '../../assets/images/resume-screenshot.png';

export default function Resume() {
    return (
        <div className='about-section'>
            <h1>RESUME</h1>
            <div className="resume">
                <img src={resumeImg} alt="resume"/>
            </div>
            <p>
                    <a className="resume-link" href="https://docs.google.com/uc?id=1y071-ANWmyKiLd5mE5EzMzAOAS97b9GW&export=download">| Download Resume |</a>
            </p>
        </div>
    )
}

