import React, { useState, useEffect } from "react";
import "./Companyd.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { useLocation } from "react-router-dom";

function Companyd() {
  const location = useLocation();

  const [firstname, setFirstname] = useState("");
  const [last, setLastname] = useState("");
  const [ID, setID] = useState("");
  const [dateofbirth, setDateofBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [companynumber, setCompanyNumber] = useState("");
  useEffect(() => {
    fetch(`/api/Login/getData?username=${location.state.username}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  });
  return (
    <div className="details">
      <div className="container">
        <input
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          className="d__item"
          type="text"
          placeholder="שם פרטי"
        />
        <input
          value={last}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          className="d__item"
          type="text"
          placeholder="שם משפחה"
        />
        <input
          value={ID}
          onChange={(e) => {
            setID(e.target.value);
          }}
          className="d__item"
          type="text"
          placeholder="תעודה זהות"
        />
        <input
          value={dateofbirth}
          onChange={(e) => {
            setDateofBirth(e.target.value);
          }}
          className="d__item"
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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="d__item"
          type="text"
          placeholder="דור אלקטרוני"
        />
        <input
          value={companyname}
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          className="d__item"
          type="text"
          placeholder="שם העסק"
        />
        <input
          value={companynumber}
          onChange={(e) => {
            setCompanyNumber(e.target.value);
          }}
          className="d__item"
          type="text"
          placeholder="ח.פ/שותפיות/עמותה"
        />
      </div>
      <div className="next_icon">
        <ArrowBackOutlinedIcon />
      </div>
    </div>
  );
}

export default Companyd;
