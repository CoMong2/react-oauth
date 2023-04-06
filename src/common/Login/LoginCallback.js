/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginCallback = () => {
    const moveToMain = async () => {
      // try{
      //   await axios.post(process.env.REACT_APP_API_PATH + '/auth/logout');
      // } catch (error){
      //   console.error(error);
      // }
      window.location.href=process.env.REACT_APP_API_PATH + '/auth/logout';
    }

    return (
      <div className='Callback'>
      </div>
    )
}

export default LoginCallback;