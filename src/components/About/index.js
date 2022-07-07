import React from 'react';
import coverImage from '../../assets/images/about-cover-photo.jpeg';

export default function About() {
    return (
        <div className='about-section'>
            <h1>About</h1>
            <div className="cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <p>
                I am a software engineer specializing in full stack web development as I receive foundational education at the University of Central Florida. With an artistic eye for design, a passion to create, and a determination to build, I am currently acquiring the fundamental knowledge and skills necessary to become an invaluable asset to the technology industry.
            </p>
        </div>
    )
}