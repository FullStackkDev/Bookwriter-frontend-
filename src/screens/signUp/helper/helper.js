// handle Input Change.

import { loginWith3rdParty } from "../api";
import { showToast } from "./toast";

export const handleChange = (event, userData, setUserData) => {
  const { name, value } = event.target;
  setUserData({
    ...userData,
    [name]: value,
  });
};

export const handleGoogle = (decoded) => {
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
        showToast(
          response.data.message,
          response.data.success ? "success" : "error"
        );
      }
    })
    .catch((error) => {
      showToast("Unable to register, please try again!", "error");
    });
};
