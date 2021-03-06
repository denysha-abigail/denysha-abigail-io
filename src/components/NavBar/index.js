import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import '../../assets/css/style.css';

const DarkTheme = {

    body: "#ffffff",
    text: "#FCF6F4",
    fontFamily: "'Source Sans Pro', sans-serif",
    textRgba: "252, 246, 244",
    bodyRgba: "0,0,0",
}

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index:3;
&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const NavBar = (props) => {
    const {
        setContactSelected,
        setAboutSelected,
        setResumeSelected,
        setProjectsSelected
    } = props

function renderContact() {
    setContactSelected(true);
    setAboutSelected(false);
    setResumeSelected(false);
    setProjectsSelected(false);
}

function renderAbout() {
    setAboutSelected(true);
    setContactSelected(false);
    setResumeSelected(false);
    setProjectsSelected(false);
}

function renderResume() {
    setResumeSelected(true);
    setContactSelected(false);
    setAboutSelected(false);
    setProjectsSelected(false);
}

function renderProjects() {
    setProjectsSelected(true);
    setContactSelected(false);
    setAboutSelected(false);
    setResumeSelected(false);
}

    return (
        <Icons>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1 }}
            >
                <a href="http://denysha-abigail.github.io/denysha-abigail-io" data-tip="Home" width={25} height={25}><i class="fa-solid fa-earth-americas icon"></i></a>
                <ReactTooltip place="right" type="light" effect="float"/>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
                <a data-tip="About" width={25} height={25} onClick={renderAbout}><i class="fa-solid fa-user-astronaut icon"></i></a>

            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <a data-tip="Projects" width={25} height={25} onClick={renderProjects}><i class="fa-solid fa-shuttle-space icon"></i></a>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <a data-tip="Contact" width={25} height={25} onClick={renderContact}><i class="fa-solid fa-satellite icon"></i></a>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <a data-tip="Resume" width={25} height={25} onClick={renderResume}><i class="fa-solid fa-file icon"></i></a>
            </motion.div>

            <Line color={props.theme}

                initial={
                    {
                        height: 0
                    }
                }
                animate={{
                    height: '8rem'
                }}
                transition={{
                    type: 'spring', duration: 1, delay: 0.8
                }}
            />
        </Icons>
    )
}

export default NavBar;