import React, { useState, useEffect } from "react";
import "./Companyd.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

function Companyd() {
  const location = useLocation();
  let history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [last, setLastname] = useState("");
  const [ID, setID] = useState("");
  const [dateofbirth, setDateofBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [companynumber, setCompanyNumber] = useState("");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    fetch(`/api/Login/getData?username=${location.state.username}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        /*
        FamilyName: "ישראלי"
FirstName: "א"
password: "11111111"
userEmail: "1@test.com"
userID: "11111111"
        */
        setFirstname(data.data.FirstName);
        setLastname(data.data.FamilyName);
        setEmail(data.data.userEmail);
      });
  });
  const checkData = () => {
    if (
      !dateofbirth ||
      !ID ||
      !companyname ||
      !companynumber ||
      !firstname ||
      !last ||
      !email
    ) {
      setFlag(true);
    } else {
      history.push("/bankacc");
    }
  };
  return (
    <div className="details">
      <div className="container">
        <input
          disabled
          value={firstname}
          className="d__item"
          type="text"
          placeholder="שם פרטי"
        />
        <input
          disabled
          value={last}
          className="d__item"
          type="text"
          placeholder="שם משפחה"
        />
        <input
          value={ID}
          onChange={(e) => {
            setID(e.target.value);
          }}
          className={flag && ID === "" ? "d__item error" : "d__item"}
          type="text"
          placeholder="תעודה זהות"
        />
        <input
          value={dateofbirth}
          onChange={(e) => {
            setDateofBirth(e.target.value);
          }}
          className={flag && dateofbirth === "" ? "d__item error" : "d__item"}
          type="text"
          placeholder="תאריך לידה"
        />
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="d__item"
          type="text"
          placeholder="טלפון"
        />
        <input
          disabled
          value={email}
          className={flag && email === "" ? "d__item error" : "d__item"}
          type="text"
          placeholder="דור אלקטרוני"
        />
        <input
          value={companyname}
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          className={flag && companyname === "" ? "d__item error" : "d__item"}
          type="text"
          placeholder="שם העסק"
        />
        <input
          value={companynumber}
          onChange={(e) => {
            setCompanyNumber((companynumber) => e.target.value);
          }}
          className={flag && companynumber === "" ? "d__item error" : "d__item"}
          type="text"
          placeholder="ח.פ/שותפיות/עמותה"
        />
      </div>
      <div className="next_icon">
        <IconButton onClick={checkData}>
          <ArrowBackOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Companyd;
