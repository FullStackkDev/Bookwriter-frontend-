// SignUp/index.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addNewUser } from "./api";
import { validateForm } from "./validator/utils";
import Design from "./design";

function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    errors: {},
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(userData);

    if (Object.keys(errors).length === 0) {
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
          toast.success("Unable to register, please try again! ", {
            position: "bottom-left",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            type: "error",
          });
        });
      setUserData({ ...userData, errors: {} });
    } else {
      setUserData({ ...userData, errors });
    }
  };

  return (
    <div>
      <Design
        userData={userData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default SignUp;
