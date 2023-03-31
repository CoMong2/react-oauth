import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

const GoogleAuthButton = () => {
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_API_KEY}
      buttonText="Google Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default GoogleAuthButton;