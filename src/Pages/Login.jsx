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
  OutlinedInput,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import { loginValidationSchema } from "../ValidationSchema/Login.validation.schema";
import { Link } from "react-router-dom";
import $axios from "../lib/axios/axios.instance";
const LoginForm = () => {
  const { isPending, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (values) => {
      return await $axios.post("/user/login", values);
    },
  });
  if (isPending) {
    return <CircularProgress />;
  }

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          mutate(values);
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
              <TextField
                label="Email"
                {...formik.getFieldProps("email")}
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                {...formik.getFieldProps("password")}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
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
