import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider"; // Import Divider component
import { useState } from "react";
import { validateForm } from "../utils/utils";
import LogoImage from "../logo.svg";
import { login } from "../api/user";

function SignIn() {
  const [state, setState] = useState({
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

    if (
      state.errors[state.email]
        ? false
        : true && state.errors[state.password]
        ? false
        : true
    ) {
      const payload = {
        email: state.email,
        password: state.password,
      };
      console.log("payload = > ", payload);
      login(payload)
        .then((respone) => {
          console.log("respone => ", respone);
        })
        .catch((error) => {
          console.log("error => ", error);
        });

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
          Sign in
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e) => handleChange(e)}
            autoFocus
            error={!!state.errors.email ? true : false}
            helperText={state.errors.email}
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
            error={!!state.errors.password ? true : false}
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
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;
