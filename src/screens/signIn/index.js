// SignIn/index.js
import React, { useState } from "react";
import SignInDesign from "./design";
import { validateForm } from "../../utils/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login, loginWith3rdParty } from "./api";

function SignIn() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm(userData);
    if (Object.keys(errors).length === 0) {
      const payload = {
        email: userData.email,
        password: userData.password,
      };

      login(payload)
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            window.location.href = "/";
          } else {
            toast.success(response.data.message, {
              position: "bottom-left",
              autoClose: 2500,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
              type: response.data.success ? "success" : "error",
            });
          }
        })
        .catch((error) => {
          console.log(error);
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
    const { given_name, family_name, email, sub } = decoded;
    const payload = {
      first_name: given_name,
      last_name: family_name ? family_name : " ",
      email: email,
      third_party_user_id: sub,
      third_party_type: "Google",
    };
    loginWith3rdParty(payload)
      .then((response) => {
        if (response.data.success) {
          window.location.href = "/";
        } else {
          toast.success(response.data.message, {
            position: "bottom-left",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            type: response.data.success ? "success" : "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <SignInDesign
        userData={userData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleGoogle={handleGoogle}
      />
      <ToastContainer />
    </div>
  );
}

export default SignIn;
