// SignUp/design.js
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styles } from "./style";
import {
  facebookAppId,
  googleClientId,
  googleScope,
  linkedInClientId,
  linkedInClientSecretId,
} from "../../utils/constant";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../helper/tosat";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  handleChange,
  handleGoogle,
  handleFaceBook,
} from "../../helper/function";
import BookLogo from "../../components/BookLogo";
import {
  LoginSocialFacebook,
  LoginSocialGoogle,
  LoginSocialLinkedin,
} from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  LinkedInLoginButton,
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
          Sign up
        </Typography>
        <Grid container justifyContent="center">
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
            <LoginSocialLinkedin
              client_id={linkedInClientId}
              client_secret={linkedInClientSecretId}
              redirect_uri={"https://08c9-182-188-100-101.ngrok-free.app"}
              onResolve={(data) => {
                console.log(data);
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <LinkedInLoginButton />
            </LoginSocialLinkedin>
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword}
            value={userData.confirmPassword}
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
