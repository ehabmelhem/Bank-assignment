import React from "react";
import "./Receipt.css";
import { useLocation } from "react-router-dom";

function Receipt() {
  let location = useLocation();

  return (
    <div className="receipt">
      <div className="rec__container">
        <h4>
          Email: <span> {location.state.email}</span>
        </h4>
        <h4>
          ID: <span>{location.state.ID} </span>
        </h4>
        <h4>
          Company Name: <span>{location.state.companyname}</span>
        </h4>
        <h4>
          Company Number: <span>{location.state.companynumber}</span>
        </h4>
        <h4>
          First Name: <span>{location.state.firstname}</span>
        </h4>
        <h4>
          Last Name: <span>{location.state.last}</span>
        </h4>
        <h4>
          Date Of Birth: <span>{location.state.dateofbirth}</span>
        </h4>
        <h4>
          Loan: <span>{location.state.Loan}</span>
        </h4>
        <h4>
          Loan Time: <span>{location.state.LoanTime} years</span>
        </h4>
      </div>
    </div>
  );
}

export default Receipt;
