// SignIn/index.js
import React, { useState } from "react";
import Design from "./design";
import "react-toastify/dist/ReactToastify.css";
import { login } from "./api";
import { validateForm } from "./validator/utils";
import { showToast } from "./helper/toast";

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
          if (response.data.success) {
            window.location.href = "/";
          } else {
            showToast(
              response.data.message,
              response.data.success ? "success" : "error"
            );
          }
        })
        .catch((error) => {
          showToast("Unable to register, please try again!", "error");
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
    </div>
  );
}

export default SignIn;
