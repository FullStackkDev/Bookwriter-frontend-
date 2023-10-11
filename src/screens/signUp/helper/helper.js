// handle Input Change.

import { toast } from "react-toastify";
import { loginWith3rdParty } from "../api";

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
};
