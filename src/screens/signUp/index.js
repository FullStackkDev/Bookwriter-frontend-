// SignUp/index.js
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { addNewUser } from "./api";
import { validateForm } from "./validator/utils";
import Design from "./design";
import { showToast } from "../../helper/tosat";

function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(userData);

    if (Object.keys(validationErrors).length === 0) {
      const payload = {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
        phone_no: userData.phoneNo,
      };
      addNewUser(payload)
        .then((response) => {
          if (response.data.success) {
            showToast(
              response.data.message,
              response.data.success ? "success" : "error"
            );
            setUserData({
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              phoneNo: "",
            });
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
      setErrors({});
    } else {
      // Validation failed, update the state with errors
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <Design
        userData={userData}
        setUserData={setUserData}
        errors={errors}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default SignUp;
