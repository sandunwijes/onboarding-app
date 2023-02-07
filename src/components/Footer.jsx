import { Button } from "@mui/material";
import React from "react";
import "./footer.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Footer({
  nextButtonHandler,
  previousButtonHandler,
  backToHomePage,
  finish,
}) {
  return (
    <div className="footer-main">
      <div>
        <Button
          variant="text"
          className="back-btn"
          onClick={previousButtonHandler}
        >
          <KeyboardBackspaceIcon />{" "}
          {backToHomePage
            ? "Back to the homepage"
            : "Back to the previous page"}
        </Button>
      </div>
      <div>
        <Button variant="contained" disableElevation className="skip-btn">
          Skip for now
        </Button>
        <Button
          variant="contained"
          className="next-btn"
          onClick={nextButtonHandler}
        >
          {finish ? "Finish" : "Next Step"}
          {finish ? "" : <ArrowRightAltIcon />}
        </Button>
      </div>
    </div>
  );
}

export default Footer;
