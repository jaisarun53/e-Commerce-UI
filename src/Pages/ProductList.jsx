import React from "react";
import ProductCard from "../components/ProductCard";
import { Box } from "@mui/material";
import SellerproductList from "../components/SellerproductList";
import BuyerProductList from "../components/BuyerProductList";

const ProductList = () => {
  const userRole = localStorage.getItem("role");
  return (
    <>{userRole === "seller" ? <SellerproductList /> : <BuyerProductList />}</>
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginBottom: "2rem",
    //     gap: "2rem",
    //   }}
    // >
    //   <ProductCard />
    //   {/* <ProductCard />
    //   <ProductCard />
    //   <ProductCard />
    //   <ProductCard />
    //   <ProductCard />
    //   <ProductCard />
    //   <ProductCard />
    //   <ProductCard />
    //   <ProductCard />
    //   <ProductCard />
    //   <ProductCard /> */}
    // </Box>
  );
};

export default ProductList;
