/* eslint-disable */
import {useSearchParams, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

const LoginErrorCallback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const status = searchParams.get('status');
        const message = searchParams.get('message');

        navigate('/');
        alert(`status: ${status}, message: ${message}`);
    });

    return null;
}

export default LoginErrorCallback;
