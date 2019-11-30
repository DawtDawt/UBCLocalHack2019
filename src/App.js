import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from "./components/Homepage";
import Login from "./components/Login";

function App() {
  return (
      <React.Fragment>
        <Switch>
          <Route exact path={"/"} component={Homepage}/>
          <Route exact path={"/login"} component={Login}/>
          {/*<Route exact path={"/login"} component={SignUp}/>*/}
        </Switch>
      </React.Fragment>
  );
}

export default App;
