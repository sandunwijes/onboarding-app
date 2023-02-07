import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { submitFinishStep } from "../State/State";
import store from "../State/store";
import "./investmentPreferences.css";

function InvestmentPreferences() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.userState.step3);
  const [markedCards, setMarkedCards] = useState(new Set(state.preferences));
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

  const saveDataToState = () => {
    let obj = {
      preferences: Array.from(markedCards),
    };
    store.dispatch(submitFinishStep({ data: obj }));
  };

  const nextButtonHandler = () => {};

  const previousButtonHandler = () => {
    saveDataToState();
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
                const selectedCard = markedCards.has(id);
                return (
                  <Card
                    variant="outlined"
                    key={id}
                    className="card-items"
                    onClick={() => {
                      let cardItems = new Set(markedCards);
                      if (selectedCard) {
                        cardItems.delete(id);
                        setMarkedCards(cardItems);
                      } else {
                        cardItems.add(id);
                        setMarkedCards(cardItems);
                      }
                    }}
                  >
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
