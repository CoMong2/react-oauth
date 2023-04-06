/* eslint-disable */
import {Route, Routes} from "react-router-dom";

//component
import Login from "./common/Login/Login";
import LoginCallback from "./common/Login/LoginCallback";
import LoginErrorCallback from "./common/Login/LoginErrorCallback";

import MainPage from "./common/Class/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='login'>
        <Route path='callback' element={<LoginCallback />} />
        <Route path={'callback/error'} element={<LoginErrorCallback/>} />
      </Route>

      {/* <Route path='*' element={<NotFound />} /> */}

      {/*<Route element={<GuardedRoute />}>*/}
      <Route path='/class'>
          <Route path='MainPage' element={<MainPage />} />
        </Route>
      {/*</Route>*/}

    </Routes>
  );
}

export default App;