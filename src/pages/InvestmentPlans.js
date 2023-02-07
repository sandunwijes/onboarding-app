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

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./investmenPlan.css";

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
function valuetext(value) {
  return `${value}°C`;
}

const formControlStyle = {
  borderStyle: "solid",
  borderWidth: "0.8px",
  paddingRight: "20px",
  paddingLeft: "10px",

  borderRadius: "5px",
};

function InvestmentPlans() {
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
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="start-amount">From</InputLabel>
              <Input
                id="start-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="end-amount">To</InputLabel>
              <Input
                id="end-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </FormGroup>
          <div>
            <Box>
              <Slider
                aria-label="Custom marks"
                defaultValue={500000}
                getAriaValueText={valuetext}
                step={20}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Box>
          </div>
          <h4>Are you an accredited investor?</h4>
          <FormControl className="form-control">
            <RadioGroup className="radio-group">
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

        <Footer />
      </div>
    </div>
  );
}

export default InvestmentPlans;
