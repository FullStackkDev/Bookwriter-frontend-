import React from "react";
import { useState } from "react";

import { useSelector } from "react-redux";
import { validateForm } from "../../../../utils/utils";
import { REQUIRED } from "../../../../utils/messages";
import Design from "./design";
import { validationRules } from "./validator/rules";

function UpdateUser({ show, setShow }) {
  const user = useSelector((state) => state.user.user);

  const [userData, setUserData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    phoneNo: user.phone_no || "",
    email: user.email,
  });

  const [errors, setErrors] = useState({});

  const toggleModal = () => setShow(!show);

  const isDisabled = (updatedUser, oldUser) => {
    return (
      updatedUser.firstName === oldUser.first_name &&
      updatedUser.lastName === oldUser.last_name &&
      updatedUser.email === oldUser.email &&
      (oldUser.phone_no ? updatedUser.phoneNo === oldUser.phone_no : false)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(userData, validationRules);

    if (
      Object.keys(validationErrors).length === 0 ||
      (Object.keys(validationErrors).length === 1 &&
        validationErrors.phoneNo === `Phone number ${REQUIRED}` &&
        typeof user.phone_no === "undefined")
    ) {
      const payload = {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        phone_no: userData.phoneNo,
      };
      console.log("payload => ", payload);
      setErrors({});
      setShow(!show);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Design
      show={show}
      toggleModal={toggleModal}
      userData={userData}
      user={user}
      setUserData={setUserData}
      errors={errors}
      handleSubmit={handleSubmit}
      isDisabled={isDisabled}
      setErrors={setErrors}
    />
  );
}

export default UpdateUser;
