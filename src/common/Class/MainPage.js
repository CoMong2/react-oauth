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
        <Layout title='Zanmang Loopy'>
            <div>
                메인메인
            </div>
        </Layout>
    )

    function getCookieValue() {
      const cookieString = decodeURIComponent(document.cookie);
      const regex = /\{.*?\}/g;
      return regex.exec(cookieString)[0].split(','); 
    }
}

export default MainPage;