import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
      <React.Fragment>
        <Switch>
          <Route exact path={"/"} component={Homepage}/>
          <Route exact path={"/Signup"} component={Signup}/>
          <Route exact path={"/login"} component={Login}/>
        </Switch>
      </React.Fragment>
  );
}

export default App;
