import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { submitStep3 } from "../State/State";
import store from "../State/store";

import "./investmenPlan.css";

function InvestmentPlans() {
  const calPercentage = (value) => {
    if (value >= 500000) {
      return 100;
    } else if (value >= 200000) {
      return 80;
    } else if (value >= 100000) {
      return 60;
    } else if (value >= 50000) {
      return 40;
    } else if (value >= 10000) {
      return 20;
    } else {
      return 0;
    }
  };

  const state = useSelector((state) => state.userState.step2);
  const navigate = useNavigate();
  const [startValue, setStartValue] = useState(state.startValue);
  const [endValue, setEndValue] = useState(state.endValue);

  const [isInvestor, setIsInvestor] = useState(false);

  const [value, setValue] = useState([
    calPercentage(state.startValue),
    calPercentage(state.endValue),
  ]);
  const formControlStyle = {
    borderStyle: "solid",
    borderWidth: "0.8px",
    paddingRight: "20px",
    paddingLeft: "10px",
    borderColor: isInvestor ? "#35A0EE" : "#D5D9DC",
    borderRadius: "5px",
    color: isInvestor ? "#35A0EE" : "#D5D9DC",
  };
  const marks = [
    {
      value: 0,
      label: "$10000",
    },
    {
      value: 20,
      label: "$50000",
    },
    {
      value: 40,
      label: "$100,000",
    },
    {
      value: 60,
      label: "$200,000",
    },
    {
      value: 80,
      label: "$500,000",
    },
    {
      value: 100,
      label: "$1,000,000",
    },
  ];

  const slideChangeHandler = (e, value) => {
    let firstValue = value[0];
    let secondValue = value[1];

    firstValue = Math.round(firstValue / 20) * 20;
    secondValue = Math.round(secondValue / 20) * 20;
    let newValue = [firstValue, secondValue];

    setValue(newValue);
    setStartValue(calValue(firstValue));
    setEndValue(calValue(secondValue));
  };

  const calValue = (val) => {
    if (val === 100) {
      return 1000000;
    } else if (val === 80) {
      return 500000;
    } else if (val === 60) {
      return 200000;
    } else if (val === 40) {
      return 100000;
    } else if (val === 20) {
      return 50000;
    } else {
      return 10000;
    }
  };

  const calBothValues = (start, end) => {
    let valueToStart = calPercentage(start);
    let valueToEnd = calPercentage(end);
    valueToStart = Math.round(valueToStart / 20) * 20;
    valueToEnd = Math.round(valueToEnd / 20) * 20;
    setValue([valueToStart, valueToEnd]);
  };

  const handleStartInput = () => {
    if (startValue > endValue) {
      setStartValue(0);
      calBothValues(0, endValue);
    }
    calBothValues(startValue, endValue);
  };

  const handleEndInput = () => {
    if (startValue > endValue) {
      setEndValue(1000000);
      calBothValues(startValue, 1000000);
    }
    calBothValues(startValue, endValue);
  };

  const saveDataToState = () => {
    let obj = {
      startValue: startValue,
      endValue: endValue,
      isInvestor: isInvestor,
    };
    store.dispatch(submitStep3({ data: obj }));
  };

  const nextButtonHandler = () => {
    saveDataToState();
    navigate("/page/3");
  };

  const previousButtonHandler = () => {
    saveDataToState();
    navigate("/page/1");
  };

  return (
    <div className="main-container-step2">
      <div>
        <Header />
        <div>
          {" "}
          <h2>Investment Plans</h2>
          <p>
            Let us know about your investment plans. This will help us get you
            to the right expert who will help you further.
          </p>
          <h4>How much are you planning to invest in this year?</h4>
          <FormGroup className="form-group">
            <FormControl fullWidth variant="standard" sx={{ m: 1 }}>
              <InputLabel htmlFor="start-amount">From</InputLabel>
              <Input
                id="start-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                onChange={(e) => setStartValue(e.target.value)}
                value={startValue}
                onBlur={handleStartInput}
              />
            </FormControl>

            <FormControl fullWidth variant="standard" sx={{ m: 1 }}>
              <InputLabel htmlFor="end-amount">To</InputLabel>
              <Input
                id="end-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                onChange={(event) => setEndValue(event.target.value)}
                value={endValue}
                onBlur={handleEndInput}
              />
            </FormControl>
          </FormGroup>
          <div>
            <Box>
              <Slider
                className="slider"
                aria-label="Custom marks"
                defaultValue={500000}
                value={value}
                step={20}
                valueLabelDisplay="on"
                marks={marks}
                onChange={slideChangeHandler}
              />
            </Box>
          </div>
          <h4>Are you an accredited investor?</h4>
          <FormControl className="form-control">
            <RadioGroup
              className="radio-group"
              onChange={(event, value) => setIsInvestor(value)}
              value={isInvestor}
            >
              <FormControlLabel
                label="Yes"
                style={formControlStyle}
                control={<Radio />}
                value={true}
              ></FormControlLabel>
              <FormControlLabel
                label="No"
                control={<Radio />}
                value={false}
                style={formControlStyle}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </div>

        <Footer
          nextButtonHandler={nextButtonHandler}
          previousButtonHandler={previousButtonHandler}
        />
      </div>
    </div>
  );
}

export default InvestmentPlans;
