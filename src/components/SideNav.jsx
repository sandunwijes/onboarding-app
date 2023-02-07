import {
  Box,
  Card,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import React from "react";
import { useParams } from "react-router-dom";
import symbol from "../resources/quatationMark.png";
import "./sideNav.css";

function SideNav() {
  const { id } = useParams();

  const steps = [
    "Contact Details",
    "Investment Plans",
    "Investment Preferences",
  ];

  return (
    <div className="main-container">
      <div className="nav-logo">
        <Typography className="logo-text">
          <span>UNITED</span>
          <span style={{ opacity: 0.5 }}>PROPERTIES</span>
        </Typography>
      </div>
      <div className="nav-stepper">
        <Stepper activeStep={id - 1} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography className="nav-stepper-text" variant="caption">
                  {step}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="nav-description">
        <div className="card-symbol-container">
          <img src={symbol} alt="" className="card-symbol" />
        </div>
        <div>
          <Card className="card">
            <CardContent className="card-content">
              <Typography className="text1">
                We care about your time, that's why we created a 3-stage
                onboarding that will not take more than 5 minutes to complete.
              </Typography>
              <Box className="box-main">
                <Box>
                  {" "}
                  <Typography className="text2">William Mac</Typography>
                  <Typography variant="body2" className="text3">
                    CO FOUNDER, INVESTER
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" className="text4">
                    <span style={{ color: "#000000" }}>U</span>
                    <span style={{ color: "#2696E8" }}>P</span>
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
