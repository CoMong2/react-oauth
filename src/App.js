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

      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;