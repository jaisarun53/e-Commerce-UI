import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import $axios from "../lib/axios/axios.instance";
import ProductCard from "./ProductCard";

const SellerproductList = () => {
  const { isPending, data } = useQuery({
    queryKey: ["get-seller-products"],
    queryFn: async () => {
      return await $axios.post("/product/list/seller", {
        page: 1,
        limit: 3,
      });
    },
  });

  const productList = data?.data?.productList;
  const totalPage = data?.data?.totalPage;

  if (isPending) {
    return <CircularProgress />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        mb: "2rem",
      }}
    >
      {productList.map((item) => {
        return <ProductCard key={item._id} {...item} />;
      })}
    </Box>
  );
};

export default SellerproductList;
