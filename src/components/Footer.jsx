import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1C1678",
        height: "60px",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",

        // Width: "100vw",
      }}
    >
      <Typography variant="h5" sx={{ color: "white" }}>
        © 2023 Copyright: Sarun Mart
      </Typography>
    </Box>
  );
};

export default Footer;
