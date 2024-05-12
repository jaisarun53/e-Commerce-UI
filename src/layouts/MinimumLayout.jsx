import React from "react";
import { Outlet } from "react-router-dom";

const MinimumLayout = () => {
  return (
    <>
      <h3>Headers</h3>
      <Outlet />
      <h3>Footers</h3>
    </>
  );
};

export default MinimumLayout;
