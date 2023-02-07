import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./header.css";
function Header() {
  return (
    <div className="header-main">
      <div className="header-text">STEP OF 3</div>
      <div className="header-text2">
        Lost or have trouble?
        <a className="help-link" href="https://www.google.com/">
          Get help
          <ArrowRightAltIcon />
        </a>
      </div>
    </div>
  );
}

export default Header;
