import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { validateForm } from "../utils/utils";
import { Divider } from "@mui/material";
import LogoImage from "../logo.svg";

function SignUp() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    errors: {},
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm(state);

    if (Object.keys(errors).length === 0) {
      // Validation passed, you can perform login logic here
      console.log("Form submitted with first name:", state.firstName);
      console.log("Form submitted with last name:", state.lastName);
      console.log("Form submitted with email:", state.email);
      console.log("Form submitted with password:", state.password);
      console.log("Form submitted with phone #:", state.phoneNo);
      // Clear the errors
      setState({ ...state, errors: {} });
    } else {
      // Validation failed, update the state with errors
      setState({ ...state, errors });
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={LogoImage} alt="Logo" width="200" height="100" />
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: (theme) => theme.palette.grey.main,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            marginBottom: "20px",
          }}
        >
          Book Writer
        </Typography>

        <Divider
          sx={{
            marginBottom: "20px",
            color: (theme) => theme.palette.grey.main,
          }}
        />

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            onChange={(e) => handleChange(e)}
            autoFocus
            error={state.errors.firstName ? true : false}
            helperText={state.errors.firstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            id="lastName"
            onChange={(e) => handleChange(e)}
            error={state.errors.lastName ? true : false}
            helperText={state.errors.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e) => handleChange(e)}
            autoFocus
            error={state.errors.email ? true : false}
            helperText={state.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNo"
            label="Phone number"
            name="phoneNo"
            onChange={(e) => handleChange(e)}
            error={state.errors.phoneNo ? true : false}
            helperText={state.errors.phoneNo}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => handleChange(e)}
            error={state.errors.password ? true : false}
            helperText={state.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signin" variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
