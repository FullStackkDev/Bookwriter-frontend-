// SignUp/design.js
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Logo, styles } from "./style";
import { googleClientId } from "../../utils/constant";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../helper/tosat";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleChange, handleGoogle } from "../../helper/function";

function Design({ userData, setUserData, errors, handleSubmit }) {
  const { boxContainer, title, form, button } = styles;
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={boxContainer}>
        <Logo />
        <Typography component="h1" variant="h5" sx={title}>
          Book Writer
        </Typography>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <GoogleOAuthProvider clientId={googleClientId}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  handleGoogle(decoded, dispatch);
                }}
                onError={() => {
                  showToast("Unable to register, please try again!", "error");
                }}
              />
            </GoogleOAuthProvider>
          </Grid>
        </Grid>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={form}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            autoFocus
            error={errors.firstName ? true : false}
            helperText={errors.firstName}
            value={userData.firstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            id="lastName"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.lastName ? true : false}
            helperText={errors.lastName}
            value={userData.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.email ? true : false}
            helperText={errors.email}
            value={userData.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNo"
            label="Phone number"
            name="phoneNo"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.phoneNo ? true : false}
            helperText={errors.phoneNo}
            value={userData.phoneNo}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.password ? true : false}
            helperText={errors.password}
            value={userData.password}
          />
          <Button type="submit" fullWidth variant="contained" sx={button}>
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to={"/signin"} variant="body2">
                {"Already have an account?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default Design;
