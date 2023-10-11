// SignIn/index.js
import React, { useState } from "react";
import Design from "./design";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "./api";
import { validateForm } from "./validator/utils";

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

  return (
    <div>
      <Design
        userData={userData}
        setUserData={setUserData}
        handleSubmit={handleSubmit}
      />
      <ToastContainer />
    </div>
  );
}

export default SignIn;
