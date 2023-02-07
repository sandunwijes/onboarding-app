import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useRouteError } from "react-router-dom";

const primary = purple[500]; // #f44336

export default function Error() {
  const error = useRouteError();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        {error.statusText || error.message}
      </Typography>
      <Link href="/" underline="none">
        <Button variant="contained">Back Home</Button>
      </Link>
    </Box>
  );
}
