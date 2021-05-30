import React, { useState } from "react";
import "./Loan.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory, useLocation } from "react-router-dom";
const PrettoSlider = withStyles({
  root: {
    color: "#2e2635",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#2dca42",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
function Loan() {
  const [LoanTime, setLoanTime] = useState(4);
  const [Loan, setLoan] = useState();
  let location = useLocation();
  let history = useHistory();
  const handleChange = (event, newValue) => {
    setLoanTime(newValue);
  };
  return (
    <div className="loan">
      <h3>אנא הזינו סכומ ההלוורה המבוקש ומשך זמן הלוואה</h3>
      <div className="data">
        <input
          value={Loan}
          onChange={(e) => {
            setLoan(e.target.value);
          }}
          type="number"
          placeholder="100,000-1,000,000"
        />
        <div className="slider">
          <span>4</span>
          <PrettoSlider
            onChange={handleChange}
            min={4}
            step={0.5}
            max={8}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={0}
          />
          <span>8</span>
        </div>
      </div>
      <div className="arrow">
        <IconButton
          onClick={async () => {
            if (Loan >= 100000 && Loan <= 1000000) {
              await fetch("/api/company/addLoan", {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                  username: location.state.username,
                  companyname: location.state.companyname,
                  companynumber: location.state.companynumber,
                  Loan: Loan,
                  LoanTime: LoanTime,
                }),
              })
                .then((r) => r.json())
                .then((data) => {
                  if (data.ok) {
                    history.push({
                      pathname: "/receipt",
                      state: {
                        email: location.state.email,
                        ID: location.state.ID,
                        companyname: location.state.companyname,
                        companynumber: location.state.companynumber,
                        firstname: location.state.firstname,
                        last: location.state.last,
                        dateofbirth: location.state.dateofbirth,
                        username: location.state.username,
                        Loan: Loan,
                        LoanTime: LoanTime,
                      },
                    });
                  }
                });
            }
          }}
        >
          <ArrowBackOutlinedIcon />
          המשך
        </IconButton>
        <IconButton
          onClick={() => {
            // bankacc
            history.push({
              pathname: "/bankacc",
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
          }}
        >
          חזור
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Loan;
