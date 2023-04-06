/* eslint-disable */
import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';

const MainPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
      const cookieData = getCookieValue();
      setName(cookieData[1].split(':')[1]);
      setEmail(cookieData[0].split(':')[1]);
      setAccessToken(cookieData[3].split(':')[1].replace('}',''));
      console.log("cookie: " + cookieData);
    }, []);

    return (
        <div>
            <Layout title={name}>
                
            </Layout>
            <div className='MainPage'>
              <p>name: { name }</p>
              <p>email: { email }</p>
              <p>accessToken: { accessToken }</p>
            </div>
        </div>
    )

    function getCookieValue() {
      const cookieString = decodeURIComponent(document.cookie);
      const regex = /\{.*?\}/g;
      return regex.exec(cookieString)[0].split(','); 
    }
}

export default MainPage;