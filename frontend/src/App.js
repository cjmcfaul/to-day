import React, { Component } from "react";
import Root from "./Root";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import requireAuth from "./utils/RequireAuth";
import axios from "axios";

axios.defaults.baseURL = "http://0.0.0.0:8000";

class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Root>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
      </div>
    );
  }
}

export default App;
