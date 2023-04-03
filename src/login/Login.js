/* eslint-disable */
import GoogleLogin from './asset/sign_in_google.png';

const Login = () => {

    const moveToAuth = () => {
        window.location.href=process.env.REACT_APP_API_PATH + '/auth/google';
    }

    return (
        <div className='Login'>
            <h1>Minions</h1>
            <span onClick={() => { moveToAuth(); }}>
                <img src={ GoogleLogin } />
            </span>
        </div>
    )
}

export default Login;