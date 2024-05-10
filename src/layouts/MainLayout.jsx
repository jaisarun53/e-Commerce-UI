import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <h3>Headers</h3>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "5rem 0",
        }}
      >
        <Outlet />
      </Box>

      {/* <Footer /> */}
      <h3>Footers</h3>
    </>
  );
};

export default MainLayout;
