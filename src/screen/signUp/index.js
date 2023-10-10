// SignUp/index.js
import React, { useState } from "react";
import SignUpDesign from "./design";
import { validateForm } from "../../utils/utils";
import { addNewUser } from "../../api/user";

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
        .then((respone) => {
          console.log(respone);
        })
        .catch((error) => {
          console.log(error);
        });
      setUserData({ ...userData, errors: {} });
    } else {
      setUserData({ ...userData, errors });
    }
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
    <SignUpDesign
      userData={userData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleGoogle={handleGoogle}
    />
  );
}

export default SignUp;
