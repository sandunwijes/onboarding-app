import { MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { submitStep2 } from "../State/State";
import store from "../State/store";
import "./contactDetails.css";

const countryOptions = [
  {
    value: "Ukraine",
    label: "Ukraine",
  },
  {
    value: "United States",
    label: "United States",
  },
  {
    value: "Sri Lanka",
    label: "Sri Lanka",
  },
];

function ContactDetails() {
  const state = useSelector((state) => state.userState.step1);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(state.fullName);
  const [phone, setPhone] = useState(state.telephone);
  const [email, setEmail] = useState(state.email);
  const [country, setCountry] = useState("United States");

  const nextButtonHandler = () => {
    let obj = {
      fullName: fullName,
      phone: phone,
      email: email,
      country: country,
    };
    store.dispatch(submitStep2({ data: obj }));

    navigate("/page/2");
  };

  const previousButtonHandler = () => {
    navigate("/page/1");
  };

  return (
    <div className="main-container-step1">
      <Header />
      <div>
        <div>
          <Typography variant="h4" className="page-title">
            Contact details
          </Typography>
          <Typography variant="body1" className="page-description">
            Welcome to United Properties, we are glad to see you! Let's get
            started by letting us know a little bit about you
          </Typography>
        </div>
        <div className="form">
          <div className="form-line1">
            <TextField
              label="Full name"
              id="fullname"
              fullWidth
              size="small"
              variant="standard"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            ></TextField>
            <TextField
              label="Phone"
              id="phone"
              type="number"
              fullWidth
              variant="standard"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></TextField>
          </div>
          <div className="form-email">
            <TextField
              label="E-mail Address"
              id="email"
              fullWidth
              size="small"
              variant="standard"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></TextField>
          </div>
          <div className="form-country">
            <TextField
              id="select-country"
              select
              label="Country"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              value={country}
            >
              {countryOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div>
          <Typography variant="h4" className="privacy-policy">
            Privacy Policy
          </Typography>
          <Typography variant="body1" className="privacy-policy-description">
            We know you care about how your personal information used and
            shared, so we take your privacy seriously.
          </Typography>
          <a href="/" className="link" id="link">
            <div>Expand Privacy policy</div>
          </a>
        </div>
      </div>
      <Footer
        nextButtonHandler={nextButtonHandler}
        previousButtonHandler={previousButtonHandler}
        backToHomePage={true}
      />
    </div>
  );
}

export default ContactDetails;
