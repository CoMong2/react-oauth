/* eslint-disable */
import {Route, Routes} from "react-router-dom";

import Login from "./login/Login";
import LoginCallback from "./login/LoginCallback";
import LoginErrorCallback from "./login/LoginErrorCallback";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='login'>
        <Route path='callback' element={<LoginCallback />} />
        <Route path={'callback/error'} element={<LoginErrorCallback/>} />
      </Route>

      <Route path='/logout'></Route>

      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;


// function App() {
//   const [result, setResult] = useState(null);

//   const moveToAuth = async () => {
    

//     try {
//       // axios.get(process.env.REACT_APP_API_PATH + '/auth/google')
//       //   .then((result) => {
//       //     console.log(result.data);
//       //   }).catch((error) => {
//       //     console.log(error);
//       //   });
//       window.location.href=process.env.REACT_APP_API_PATH + '/auth/google';
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="App">
//       <div>
//         <h1>Minions</h1>
//         <span onClick={() => {moveToAuth();}}>
//           <img src={ google } />
//         </span>
//       </div>
//       <div>
//         {/* <GoogleAuthButton/> */}
//       </div>
//     </div>
//   );
// }
  
// export default App;
