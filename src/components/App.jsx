import React, { Component } from 'react';


import UserCardGallery from './UserCardGallery';




export class App extends Component {

  render() { 
    
   return (
     <div className='App'
       
      style={{
            height: '100vh',
        display: 'flex',
          padingTop: '20px',
         flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
     >
       
       The world's most famous composers

       <UserCardGallery />

    
    </div>
  );
}
};
