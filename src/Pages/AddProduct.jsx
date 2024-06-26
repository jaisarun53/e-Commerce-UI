import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
} from "@mui/material";
import { Formik } from "formik";

import { productCategories } from "../constants/general.constants";
import { loginValidationSchema } from "../ValidationSchema/Register.validation.schema";
const AddProduct = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          image: null,
          name: "",
          brand: "",
          price: 0,
          availableQuantity: 1,
          category: "",
          freeShipping: "",
          description: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: "1rem",
              gap: "1rem",
              width: "400px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Typography variant="h4">Add Product</Typography>
            <FormControl>
              <TextField
                label="Name"
                {...formik.getFieldProps("name")}
                required
              />
              {formik.touched.name && formik.errors.name ? (
                <FormHelperText error>{formik.errors.name}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Brand"
                {...formik.getFieldProps("brand")}
                required
              />
              {formik.touched.brand && formik.errors.brand ? (
                <FormHelperText error>{formik.errors.brand}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Price"
                {...formik.getFieldProps("price")}
                type="number"
                required
              />
              {formik.touched.price && formik.errors.price ? (
                <FormHelperText error>{formik.errors.price}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Quantity"
                {...formik.getFieldProps("availableQuantity")}
                type="number"
                required
              />
              {formik.touched.availableQuantity &&
              formik.errors.availableQuantity ? (
                <FormHelperText error>
                  {formik.errors.availableQuantity}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <FormControlLabel
                control={<Checkbox {...formik.getFieldProps("freeShipping")} />}
                label="Free Shipping"
              />
            </FormControl>

            <FormControl>
              <InputLabel>Category</InputLabel>
              <Select
                label="Category"
                required
                {...formik.getFieldProps("category")}
              >
                {productCategories.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
              {formik.touched.category && formik.errors.category ? (
                <FormHelperText error>{formik.errors.category}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                multiline
                rows={4}
                required
                label="Description"
                {...formik.getFieldProps("description")}
              />
              {formik.touched.description && formik.errors.description ? (
                <FormHelperText error>
                  {formik.errors.description}
                </FormHelperText>
              ) : null}
            </FormControl>

            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddProduct;
