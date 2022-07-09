import React, { useState } from 'react';
import '../src/assets/css/style.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Starfield from 'react-starfield-animation';
import SocialIcons from './components/NavBar';

export default function App() {
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <>
      <Starfield
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <SocialIcons setContactSelected={setContactSelected}/>
        {/* <Resume/> */}
      <div>
      {!contactSelected ? (
      <About/>
      ) : (
        <ContactForm />
      )}
      </div>
    </>
  );
}

