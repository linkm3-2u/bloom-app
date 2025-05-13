
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Box 
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f3f3f3"
      }}
    >
      <Box textAlign="center">
        <Typography variant="h2" fontWeight="bold" marginBottom={2}>404</Typography>
        <Typography variant="h5" color="textSecondary" marginBottom={3}>
          Oops! Page not found
        </Typography>
        <Button 
          href="/" 
          variant="contained"
          color="primary"
          disableElevation
        >
          Return to Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
