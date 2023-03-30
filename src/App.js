/** eslint-disable */
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [uri, setUri] = useState('');

  useEffect(() => {
    axios.get(uri).then((response) => {
      setMessage(response.data);
    });
  }, []);

  return (
    <div className="App">
      <button onClick={() => setUri('/auth/google')}>Google</button>
      {/* <h1>{message}</h1> */}
    </div>
  );
}

export default App;
