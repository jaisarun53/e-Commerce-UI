import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  OutlinedInput,
  LinearProgress,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerValidateSchema } from "../ValidationSchema/Register.validation.schema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import $axios from "../lib/axios/axios.instance";

const Register = () => {
  // hit register api
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (values) => {
      console.log(values);
      return await $axios.post("/user/register", values);
    },
    onSuccess: (res) => {
      console.log(res);
      navigate("/login");
    },
    onError: (error) => {
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    },
  });
  // hide password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {isPending && <LinearProgress color="secondary" />}
      <Box>
        {/* <Typography>hello</Typography> */}
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: "",
            gender: "",
          }}
          validationSchema={registerValidateSchema}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          {({ handleSubmit, touched, errors, getFieldProps }) => {
            return (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                  gap: "1rem",
                  width: "350px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
              >
                <Typography variant="h4">Register</Typography>
                <FormControl>
                  <TextField
                    label="First name"
                    {...getFieldProps("firstName")}
                    required
                  />
                  {touched.firstName && errors.firstName ? (
                    <FormHelperText error>{errors.firstName}</FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl>
                  <TextField
                    label="Last name"
                    {...getFieldProps("lastName")}
                    required
                  />
                  {touched.lastName && errors.lastName ? (
                    <FormHelperText error>{errors.lastName}</FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl>
                  <TextField
                    label="Email"
                    {...getFieldProps("email")}
                    required
                  />
                  {touched.email && errors.email ? (
                    <FormHelperText error>{errors.email}</FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    {...getFieldProps("password")}
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
                  {touched.password && errors.password ? (
                    <FormHelperText error>{errors.password}</FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl fullWidth required>
                  <InputLabel>Role</InputLabel>
                  <Select {...getFieldProps("role")} label="Role">
                    <MenuItem value="buyer">Buyer</MenuItem>
                    <MenuItem value="seller">Seller</MenuItem>
                  </Select>
                  {touched.role && errors.role ? (
                    <FormHelperText error>{errors.role}</FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl fullWidth required>
                  <InputLabel>Gender</InputLabel>
                  <Select {...getFieldProps("gender")} label="Gender">
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="preferNotToSay">
                      Prefer Not To Say
                    </MenuItem>
                  </Select>
                  {touched.gender && errors.gender ? (
                    <FormHelperText error>{errors.gender}</FormHelperText>
                  ) : null}
                </FormControl>

                <Button
                  color="secondary"
                  variant="contained"
                  type="submit"
                  disabled={isPending}
                >
                  Sign up
                </Button>

                <Link to="/login">Already Registered? Login</Link>
              </form>
            );
          }}
        </Formik>
      </Box>
    </>
  );
};
export default Register;
