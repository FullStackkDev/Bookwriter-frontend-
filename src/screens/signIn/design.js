// SignIn/design.js
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
import { handleChange, handleGoogle } from "./helper/helper";
import { googleClientId } from "../../utils/constant";
import { ToastContainer } from "react-toastify";
import { showToast } from "./helper/toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

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
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={form}>
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
            autoFocus
            error={errors.email ? true : false}
            helperText={errors.email}
            value={userData.email}
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
          <Grid container>
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
          <Button type="submit" fullWidth variant="contained" sx={button}>
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to={"/signup"} variant="body2">
                {"Don't have an account?"}
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
