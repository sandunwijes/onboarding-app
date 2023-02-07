import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "./components/SideNav";
import ContactDetails from "./pages/ContactDetails";
import InvestmentPlans from "./pages/InvestmentPlans";
import InvestmentPreferences from "./pages/InvestmentPreferences";

function Home() {
  const { id } = useParams();

  return (
    <div>
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={4} md={4} lg={4} color={{ background: "#2696E8" }}>
          <SideNav />
        </Grid>
        <Grid item xs={8} md={8} lg={8} color={{ background: "white" }}>
          {id === "1" ? (
            <ContactDetails />
          ) : id === "2" ? (
            <InvestmentPlans />
          ) : id === "3" ? (
            <InvestmentPreferences />
          ) : (
            <ContactDetails />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
