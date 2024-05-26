import React from "react";
import ProductCard from "../components/ProductCard";
import { Box } from "@mui/material";
import SellerproductList from "../components/SellerproductList";
import BuyerProductList from "../components/BuyerProductList";

const ProductList = () => {
  const userRole = localStorage.getItem("role");
  return (
    <>{userRole === "seller" ? <SellerproductList /> : <BuyerProductList />}</>
  );
};

export default ProductList;
