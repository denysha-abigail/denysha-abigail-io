import React, { useState } from 'react';
import '../src/assets/css/style.css';
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Starfield from 'react-starfield-animation';
import SocialIcons from './components/NavBar';

export default function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <>
      <Starfield
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <SocialIcons setContactSelected={setContactSelected} setAboutSelected={setAboutSelected} setResumeSelected={setResumeSelected}/>
      <div>
      {!contactSelected ? (
      <Home/>
      ) : (
        <ContactForm />
      )}
      {!aboutSelected ? (
      <Home/>
      ) : (
        <About />
      )}
      {!resumeSelected ? (
      <Home/>
      ) : (
        <Resume />
      )}
      </div>
    </>
  );
}

