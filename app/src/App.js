// Bk7caXDZGUQOG8Tq
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
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
        <button type="submit" onClick={submitHandler}>
          התחבר
        </button>
      </form>
    </div>
  );
}

export default App;
