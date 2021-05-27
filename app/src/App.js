import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect } from "react";

import "./App.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [messege, setMessege] = useState("please fill all the fields");
  const [showProgress, setShowProgress] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShowProgress(true);
    if (!username || !password) {
      setOpen(true);
    }
    setShowProgress(false);
  };
  return (
    <div className="app">
      <header>
        <img src="https://loan.btbisrael.co.il/assets/images/logo.png" alt="" />
      </header>
      <form className="flex">
        <h2>התחברות</h2>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="שם משתמש"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="סיסמה"
        />
        {showProgress && <CircularProgress className="progress" />}
        <button type="submit" onClick={submitHandler}>
          התחבר
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

export default App;
