import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#A3FFD6",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100vw",
      }}
    >
      <Typography>© 2023 Copyright: Sarun Mart</Typography>
    </Box>
  );
};

export default Footer;
