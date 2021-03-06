import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import "./App.css";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [messege, setMessege] = useState("please fill all the fields");
  const [showProgress, setShowProgress] = useState(false);
  let history = useHistory();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setShowProgress(true);
    if (!username || !password) {
      setMessege("please fill all the fields");
      setOpen(true);
    } else {
      await fetch("/api/Login/checkUser", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.ok === true) {
            history.push({
              pathname: "/details",
              state: {
                username: username,
              },
            });
          } else {
            setMessege("PLEASE INSERT RIGHT VALID");
            setOpen(true);
          }
        });
    }

    setShowProgress(false);
  };
  return (
    <div className="app">
      <header>
        <img src="https://loan.btbisrael.co.il/assets/images/logo.png" alt="" />
      </header>
      <form className="flex">
        <h2>??????????????</h2>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="???? ??????????"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="??????????"
        />
        {showProgress && <CircularProgress className="progress" />}
        <button type="submit" onClick={submitHandler}>
          ??????????
        </button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {messege}
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
}

export default Login;
