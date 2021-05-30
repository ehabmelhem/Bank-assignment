import React, { useState, useEffect } from "react";
import "./BackAccount.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { v4 as uuidv4 } from "uuid";
import { useHistory, useLocation } from "react-router-dom";

function Hazaka({ setHazaka }) {
  return (
    <div className="account__item">
      <h3>% החזקה</h3>
      <div className="line"></div>
      <select
        onChange={(e) => {
          setHazaka(e.target.value);
        }}
      >
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
function Account({ id, allAccounts, setAllAccounts, Branch, Account }) {
  const [branch, setBranch] = useState(Branch);
  const [account, setAccount] = useState(Account);

  return (
    <div className="account__details">
      <div className="account__item">
        <h3>בנק</h3>
        <div className="line"></div>
        <select
          onChange={(e) => {
            let all = [...allAccounts];
            all.map((elm) => {
              if (elm.id === id) elm.Bank = e.target.value;
            });
            setAllAccounts([...all]);
            console.log(allAccounts);
          }}
        >
          <option>פועלים</option>
          <option>לאומי</option>
          <option>BTB</option>
        </select>
      </div>
      <div className="account__item">
        <h3>סניף</h3>
        <div className="line"></div>
        <input
          value={branch}
          onChange={(e) => {
            let all = [...allAccounts];
            all.map((elm) => {
              if (elm.id === id) elm.branch = e.target.value;
            });
            setAllAccounts([...all]);
            setBranch(e.target.value);
          }}
          type="text"
        />
      </div>
      <div className="account__item">
        <h3>חשבון</h3>
        <div className="line"></div>
        <input
          value={account}
          onChange={(e) => {
            let all = [...allAccounts];
            all.map((elm) => {
              if (elm.id === id) elm.accountNumber = e.target.value;
            });
            setAllAccounts([...all]);
            setAccount(e.target.value);
          }}
          type="text"
        />
      </div>
      <button
        onClick={() => {
          setAllAccounts((allAccounts) =>
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
  let location = useLocation();
  let history = useHistory();
  const [allAccounts, setAllAccounts] = useState([]);
  const [hazaka, setHazaka] = useState("10%");

  return (
    <div className="account">
      <header>
        <img src="https://loan.btbisrael.co.il/assets/images/logo.png" alt="" />
      </header>
      <div className="forward__icon">
        <IconButton
          onClick={() => {
            history.push({
              pathname: "/details",
              state: {
                username: location.state.username,
              },
            });
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </div>
      <div className="account__container">
        <h2>
          {" "}
          אנא מלוא את פרטי החשבונות של חברת "{location.state.companyname}"
        </h2>
        <h4>ח.פ: {location.state.companynumber}</h4>
        <Hazaka setHazaka={setHazaka} />
        {allAccounts.map((elm) => {
          return (
            <Account
              allAccounts={allAccounts}
              setAllAccounts={setAllAccounts}
              id={elm.id}
              Branch={elm.branch}
              Account={elm.accountNumber}
            />
          );
        })}
        <button
          onClick={() => {
            setAllAccounts((allAccounts) => [
              ...allAccounts,
              { Bank: "פועלים", branch: "", accountNumber: "", id: uuidv4() },
            ]);
          }}
          className="addAccount"
        >
          + הוספה חשבון
        </button>
      </div>
      <div className="next_icon">
        <IconButton
          onClick={async () => {
            var flag = true;
            allAccounts.map((elm) => {
              if (!elm.branch || !elm.Bank || !elm.accountNumber) {
                flag = false;
              }
            });
            if (!flag && !hazaka) {
              alert("please fill all the accounts");
            } else {
              await fetch("/api/company/addAcounts", {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                  userID: location.state.username,
                  allAccounts: allAccounts,
                  Hazaka: hazaka,
                  companyName: location.state.companyname,
                  companyNumber: location.state.companynumber,
                }),
              })
                .then((r) => r.json())
                .then((data) => {
                  console.log(data);
                  if (data.ok === true) {
                    history.push({
                      pathname: "/loan",
                      state: {
                        email: location.state.email,
                        ID: location.state.ID,
                        companyname: location.state.companyname,
                        companynumber: location.state.companynumber,
                        firstname: location.state.firstname,
                        last: location.state.last,
                        dateofbirth: location.state.dateofbirth,
                        username: location.state.username,
                      },
                    });
                  }
                });
            }
          }}
        >
          <ArrowBackOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default BankAccount;
