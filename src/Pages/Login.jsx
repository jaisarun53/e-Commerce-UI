import React from "react";
import { Formik, validateYupSchema } from "formik";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Password } from "@mui/icons-material";

import { loginValidationSchema } from "../ValidationSchema/Login.validation.schema";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",

          password: "",
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
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              width: "400px",
              gap: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Typography variant="h4">Sign in</Typography>

            <FormControl>
              <TextField label="Email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>

            {/* {console.log(formik.errors)} */}
            <Button type="submit" color="secondary" variant="contained">
              Login
            </Button>
            <Link to="/register">New here? Register</Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
