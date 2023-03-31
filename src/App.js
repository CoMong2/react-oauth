/* eslint-disable */
import React, { useState } from 'react';
import google from './login/google.png';
import GoogleAuthButton from './login/GoogleAuthButton';


function App() {
  const [result, setResult] = useState(null);

  const moveToAuth = async () => {
    try {
      window.location.href=process.env.REACT_APP_API_PATH + '/auth/google';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Minions</h1>
        <span onClick={() => {moveToAuth();}}>
          <img src={ google } />
        </span>
      </div>
      <div>
        <GoogleAuthButton/>
      </div>
    </div>
  );
}
  
export default App;
