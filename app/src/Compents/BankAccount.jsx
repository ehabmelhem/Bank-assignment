import React, { useState } from "react";
import "./BackAccount.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { v4 as uuidv4 } from "uuid";
function Hazaka() {
  return (
    <div className="account__item">
      <h3>% החזקה</h3>
      <div className="line"></div>
      <select>
        <option>10%</option>
        <option>20%</option>
        <option>30%</option>
        <option>40%</option>
        <option>50%</option>
        <option>60%</option>
        <option>70%</option>
        <option>80%</option>
        <option>90%</option>
        <option>100%</option>
      </select>
    </div>
  );
}
function Account({ id, allAccounts, setAllAccounts }) {
  return (
    <div className="account__details">
      <div className="account__item">
        <h3>בנק</h3>
        <div className="line"></div>
        <select>
          <option>פועלים</option>
          <option>לאומי</option>
          <option>BTB</option>
        </select>
      </div>
      <div className="account__item">
        <h3>סניף</h3>
        <div className="line"></div>
        <input type="text" />
      </div>
      <div className="account__item">
        <h3>חשבון</h3>
        <div className="line"></div>
        <input type="text" />
      </div>
      <button
        onClick={() => {
          setAllAccounts(
            allAccounts.filter((elm) => {
              return elm.id !== id;
            })
          );
        }}
      >
        - הסר
      </button>
    </div>
  );
}
function BankAccount() {
  const [allAccounts, setAllAccounts] = useState([]);

  return (
    <div className="account">
      <header>
        <img src="https://loan.btbisrael.co.il/assets/images/logo.png" alt="" />
      </header>
      <div className="forward__icon">
        <IconButton>
          <ArrowForwardIcon />
        </IconButton>
      </div>
      <div className="account__container">
        <h2>אנא מלוא את פרטי החשבונות של חברת "שלמה יזומות ו בניין"</h2>
        <h4>ח.פ:</h4>
        <Hazaka />
        {allAccounts.map((elm) => {
          return (
            <Account
              allAccounts={allAccounts}
              setAllAccounts={setAllAccounts}
              id={elm.id}
            />
          );
        })}
        <button
          onClick={() => {
            setAllAccounts([
              ...allAccounts,
              { Bank: "", branch: "", accountNumber: "", id: uuidv4() },
            ]);
          }}
          className="addAccount"
        >
          + הוספה חשבון
        </button>
      </div>
      <div className="next_icon">
        <IconButton>
          <ArrowBackOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default BankAccount;
