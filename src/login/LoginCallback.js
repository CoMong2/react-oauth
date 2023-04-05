/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

const LoginCallback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [accessToken, setAccessToken] = useState('');

    const moveToMain = () => {
        window.location.href=process.env.REACT_APP_API_PATH + '/auth/logout';
    }

    useEffect(() => {
      //const cookieData = decodeURIComponent(document.cookie);
      const cookieData = getCookieValue();
      setName(cookieData[1].split(':')[1]);
      setEmail(cookieData[0].split(':')[1]);
      setAccessToken(cookieData[3].split(':')[1].replace('}',''));
      console.log("cookie: " + cookieData);
    }, []);

    return (
      <div className='Callback'>
          <h1>Minions</h1>
          <div>
              <p>name: { name }</p>
              <p>email: { email }</p>
              <p>accessToken: { accessToken }</p>
              <button onClick={() => {moveToMain();}}>Logout</button>
          </div>
      </div>
    )

    function getCookieValue() {
      const cookieString = decodeURIComponent(document.cookie);
      const regex = /\{.*?\}/g;
      return regex.exec(cookieString)[0].split(','); 
    }
}



export default LoginCallback;