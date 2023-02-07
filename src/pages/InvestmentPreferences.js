import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./investmentPreferences.css";

function InvestmentPreferences() {
  const navigate = useNavigate();
  const cardInfo = [
    { id: "1", value: "Single family" },
    { id: "2", value: "Residential multifamily" },
    { id: "3", value: "Commercial Retail" },
    { id: "4", value: "Commercial Industrial" },
    { id: "5", value: "Commercial Hospitality" },
    { id: "6", value: "Commercial Wearhousing" },
    { id: "7", value: "Commercial Office" },
    { id: "8", value: "Other" },
  ];
  const nextButtonHandler = () => {};

  const previousButtonHandler = () => {
    navigate("/page/2");
  };

  return (
    <div className="main-container-step3">
      <div>
        <Header />
        <div>
          <h2>Investment preferences</h2>
          <p>
            This will help us figure out what your investment options are so
            that we can show you only possibly intresting for you deals
          </p>
        </div>
        <div>
          <div>
            <h3>What kind of real estate are you interested in?</h3>
            <div className="card-container">
              {cardInfo.map(({ id, value }) => {
                return (
                  <Card variant="outlined" key={id} className="card-selected">
                    <CardContent id="checkbox">
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        <Checkbox />
                      </Typography>
                    </CardContent>
                    <CardActions>{value}</CardActions>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        <Footer
          nextButtonHandler={nextButtonHandler}
          previousButtonHandler={previousButtonHandler}
          finish={true}
        />
      </div>
    </div>
  );
}

export default InvestmentPreferences;
