import React from "react";
import { Outlet } from "react-router-dom";

const MinimumLayout = () => {
  return (
    <>
<<<<<<< Updated upstream
      <h3>Headers</h3>
=======
    <h3>Headers</h3>
>>>>>>> Stashed changes
      <Outlet />
      <h3>Footers</h3>
    </>
  );
};

export default MinimumLayout;
