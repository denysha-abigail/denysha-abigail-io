import React from 'react';
import '../src/assets/css/style.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Starfield from 'react-starfield-animation';
import SocialIcons from './components/NavBar';

export default function App() {

  return (
    <>
      <Starfield
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <SocialIcons/>
      {/* <About/> */}
      {/* <ContactForm /> */}
    </>
  );
}

