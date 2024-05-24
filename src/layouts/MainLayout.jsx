import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
};

export default MainLayout;
