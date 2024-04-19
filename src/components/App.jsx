import React from 'react';
import Phonebook from './Phonebook/Phonebook';


export const App = () => {
 
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>AEM React homework template</h1>
      
      <Phonebook />
    </div>
  );
};
