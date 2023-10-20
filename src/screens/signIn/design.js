// SignIn/design.js
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styles } from "./style";
import {
  handleChange,
  handleGoogle,
  handleFaceBook,
} from "../../helper/function";
import {
  googleClientId,
  facebookAppId,
  googleScope,
} from "../../utils/constant";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../helper/tosat";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import BookLogo from "../../components/BookLogo";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

function Design({ userData, setUserData, errors, handleSubmit }) {
  const { boxContainer, title, form, button } = styles;
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={boxContainer}>
        <BookLogo />
        <Typography component="h1" variant="h5" sx={title}>
          Book Writer
        </Typography>

        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <LoginSocialGoogle
              client_id={googleClientId}
              scope={googleScope}
              onResolve={(data) => {
                handleGoogle(data.data, dispatch);
              }}
              onReject={() => {
                showToast("Unable to register, please try again!", "error");
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
            <LoginSocialFacebook
              appId={facebookAppId}
              onResolve={(response) => {
                handleFaceBook(response.data, dispatch);
              }}
              onReject={() => {
                showToast("Unable to register, please try again!", "error");
              }}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
          </Grid>
        </Grid>
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
            InputLabelProps={{ shrink: true }}
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
            InputLabelProps={{ shrink: true }}
          />
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
