import React from 'react';
import coverImage from '../../assets/images/about-cover-photo.jpeg';

export default function About() {
    return (
        <div className='about-section'>
            <h1>ABOUT</h1>
            <div className="cover">
                <img src={coverImage} alt="cover" />
            </div>
            <p>
                My name is <span>Denysha Guerrios-Armaiz</span> and I am a software engineer specializing in full stack web development
                <br />
                <br />
                With an artistic eye for design, a passion to create, and a determination to build, I am constantly acquiring the fundamental knowledge and skills necessary to become an invaluable asset to the technology industry
                <br />
                <br />
                <span>Technical Skills:</span>
                <br />
                HTML, CSS, JavaScript, jQuery, MySQL, MongoDB, Express.js, React.js, Node.js
                <br />
                <br />
                <span>Behavioral Skills: </span>
                <br />
                Team Collaboration, Coachable, Time Management, Communication, Self-Improvement, Decision-Making, Perserverence
                <br />
                <br />
                <a href="https://github.com/denysha-abigail" target="_blank" className='social-icon'><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/denysha-guerrios-armaiz-ab2750229/" target="_blank" className='social-icon'><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://stackoverflow.com/users/17819429/denysha-abigail" target="_blank" className='social-icon'><i class="fa-brands fa-stack-overflow"></i></a>
            </p>
        </div>
    )
}