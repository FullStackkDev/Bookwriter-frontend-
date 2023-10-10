// SignIn/index.js
import React, { useState } from "react";
import SignInDesign from "./design";
import { validateForm } from "../../utils/utils";
import { login } from "../../api/user";

function SignIn() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm(userData);

    if (
      userData.errors[userData.email]
        ? false
        : true && userData.errors[userData.password]
        ? false
        : true
    ) {
      const payload = {
        email: userData.email,
        password: userData.password,
      };

      login(payload)
        .then((respone) => {
          if (respone.data.success) {
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log("error => ", error);
        });

      setUserData({ ...userData, errors: {} });
    } else {
      // Validation failed, update the state with errors
      setUserData({ ...userData, errors });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleGoogle = (decoded) => {
    const { given_name, family_name, email } = decoded;
    setUserData({
      ...userData,
      firstName: given_name || "",
      lastName: family_name || "",
      email: email || "",
    });
  };

  return (
    <SignInDesign
      userData={userData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleGoogle={handleGoogle}
    />
  );
}

export default SignIn;
