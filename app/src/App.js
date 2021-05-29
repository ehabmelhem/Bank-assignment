import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Companyd from "./Compents/Companyd";
import "./App.css";
import Login from "./Compents/Login";
import BankAccount from "./Compents/BankAccount";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/bankacc">
          <BankAccount />
        </Route>
        <Route path="/details">
          <Companyd />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
