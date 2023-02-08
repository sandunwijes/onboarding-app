import { MenuItem, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { submitStep2 } from "../State/State";
import store from "../State/store";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../validation/validation";
import "./contactDetails.css";
const textFieldStyles = {
  textField: { marginBottom: "10px" },
  input: {
    fontSize: 30,
    fontWeight: "bold",
  },
};
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
  {
    value: "India",
    label: "India",
  },
  {
    value: "Singapore",
    label: "Singapore",
  },
];

function ContactDetails() {
  const state = useSelector((state) => state.userState.step1);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState(state.fullName);
  const [phone, setPhone] = useState(state.telephone);
  const [email, setEmail] = useState(state.email);
  const [country, setCountry] = useState("United States");

  const [phoneError, setPhoneError] = useState(false);
  const [phoenHelperText, setPhoneHelperText] = useState(" ");

  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState(" ");

  const [fullNameError, setFullNameError] = useState(false);
  const [fullNameHelperText, setFullNameHelperText] = useState(" ");
  const [buttonDeactive, setButtonDeactive] = useState(true);

  useEffect(() => {
    let blankFields = fullName === "" || phone === "" || email === "";
    let error = emailError || phoneError || fullNameError;

    if (!blankFields && !error) {
      setButtonDeactive(false);
    } else {
      setButtonDeactive(true);
    }
  }, [emailError, phoneError, fullNameError, fullName, phone, email]);

  //Form Validation
  const validateInputs = (inputData) => {
    switch (inputData) {
      case "fullName": {
        const result = validateName(fullName);
        if (result.error) {
          setFullNameError(true);
          setFullNameHelperText(result.error.details[0].message);
        } else {
          setFullNameError(false);
          setFullNameHelperText(" ");
        }
        break;
      }
      case "phone": {
        const result = validatePhone(phone);
        if (result.error) {
          setPhoneError(true);
          setPhoneHelperText(result.error.details[0].message);
        } else {
          setPhoneError(false);
          setPhoneHelperText(" ");
        }
        break;
      }
      case "email": {
        const result = validateEmail(email);
        if (result.error) {
          setEmailError(true);
          setEmailHelperText(result.error.details[0].message);
        } else {
          setEmailError(false);
          setEmailHelperText(" ");
        }
        break;
      }
      default: {
      }
    }
  };

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
              error={fullNameError}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              helperText={fullNameHelperText}
              onBlur={() => validateInputs("fullName")}
              InputLabelProps={{
                classes: {
                  root: textFieldStyles.input,
                },
              }}
              style={textFieldStyles.textField}
            ></TextField>
            <TextField
              label="Phone"
              id="phone"
              type="number"
              fullWidth
              variant="standard"
              error={phoneError}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              helperText={phoenHelperText}
              onBlur={() => validateInputs("phone")}
              InputLabelProps={{
                classes: {
                  root: textFieldStyles.input,
                },
              }}
              style={textFieldStyles.textField}
            ></TextField>
          </div>
          <div className="form-email">
            <TextField
              label="E-mail Address"
              id="email"
              fullWidth
              size="small"
              variant="standard"
              error={emailError}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              helperText={emailHelperText}
              onBlur={() => validateInputs("email")}
              InputLabelProps={{
                classes: {
                  root: textFieldStyles.input,
                },
              }}
              style={textFieldStyles.textField}
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
              InputLabelProps={{
                classes: {
                  root: textFieldStyles.input,
                },
              }}
              style={textFieldStyles.textField}
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
        buttonDeactive={buttonDeactive}
      />
    </div>
  );
}

export default ContactDetails;
