import { Box } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import addProductValidationSchema from "../ValidationSchema/add.product.validation.schema";

const AddProduct = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          name: "",
          brand: "",
          price: 0,
          category: "",
          freeShipping: null,
          availableQuantity: 1,
          description: "",
          image: null,
        }}
        validationSchema={addProductValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      ></Formik>
    </Box>
  );
};

export default AddProduct;
