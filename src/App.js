import React from 'react';
import '../src/assets/css/style.css';
import Starfield from 'react-starfield-animation';

export default function App() {
  
  return (
    <Starfield
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
  );
}