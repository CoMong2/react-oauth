/* eslint-disable */
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

const LoginCallback = () => {

    const moveToMain = () => {
        window.location.href=process.env.REACT_APP_API_PATH + '/auth/logout';
    }

    return (
        <div className='Callback'>
            <h1>Minions</h1>
            <div>
                <button onClick={() => {moveToMain();}}>Logout</button>
            </div>
        </div>
    )
}

export default LoginCallback;