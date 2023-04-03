import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.response.use(
    response => {
        return response.data;
    },
    async error => {
        const { config, response: { status } } = error;
        if ([401, 403].indexOf(status) !== -1) {
            try {
                await axios.get(
                    `${process.env.REACT_APP_API_URL}/v1/auth/refresh`, // token refresh api
                    { withCredentials: true }
                );
                const retry = await axios(config);
                return retry.data; 
            } catch (error) {
                const redirectUrl=encodeURI(process.env.REACT_APP_FRONT_URL)
            }
        }
        return Promise.reject(error);
    }
)

export default instance;
