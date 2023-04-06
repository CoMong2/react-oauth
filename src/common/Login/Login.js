/* eslint-disable */
import './Login.scss';
import GoogleLogin from '../../asset/googleLogin.png';
import ZanmangLoopy from '../../asset/zanmanLoopy.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {

    const moveToAuth = () => {
        window.location.href=process.env.REACT_APP_API_PATH + '/auth/google';
    }

    return (
        <div className='Login' style={{ display: 'flex' }}>
            <div className='login-banner'>
                <img src={ ZanmangLoopy }/>
            </div>
            
            <div>
                <p className='title'>Zanmang Dev's To-do List</p>
                {/* <span onClick={() => { moveToAuth(); }}>
                    <img src={ GoogleLogin } />
                </span> */}
                <a onClick={() => { moveToAuth(); }} class="btn btn-google btn-block"> Google 로그인</a>
            </div>
        </div>
    )
}

export default Login;