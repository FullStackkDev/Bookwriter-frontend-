// SignUp/design.js
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Logo, styles } from "./style";
import { googleClientId } from "../../utils/constant";
import { handleChange, handleGoogle } from "./helper/helper";
import { ToastContainer } from "react-toastify";
import { showToast } from "./helper/toast";
function Design({ userData, setUserData, handleSubmit }) {
  const { boxContainer, title, form, button } = styles;

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
            error={userData.errors.firstName ? true : false}
            helperText={userData.errors.firstName}
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
            error={userData.errors.lastName ? true : false}
            helperText={userData.errors.lastName}
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
            error={userData.errors.email ? true : false}
            helperText={userData.errors.email}
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
            error={userData.errors.phoneNo ? true : false}
            helperText={userData.errors.phoneNo}
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
            error={userData.errors.password ? true : false}
            helperText={userData.errors.password}
            value={userData.password}
          />
          <Grid container>
            <Grid item>
              <GoogleOAuthProvider clientId={googleClientId}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    handleGoogle(decoded);
                  }}
                  onError={() => {
                    showToast("Unable to register, please try again!", "error");
                  }}
                />
              </GoogleOAuthProvider>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={button}>
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/signin" variant="body2">
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
