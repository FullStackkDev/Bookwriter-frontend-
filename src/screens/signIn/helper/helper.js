// handle Input Change.

import { loginWith3rdParty } from "../../../api/thirdPartyLogin";
import { showToast } from "./toast";

export const handleChange = (event, stateData, setStateData) => {
  const { name, value } = event.target;
  setStateData({
    ...stateData,
    [name]: value,
  });
};

export const handleGoogle = (decoded, dispatch) => {
  const { given_name, family_name, email, sub } = decoded;
  const payload = {
    first_name: given_name,
    last_name: family_name ? family_name : " ",
    email: email,
    third_party_user_id: sub,
    third_party_type: "Google",
  };
  dispatch(loginWith3rdParty(payload))
    .then((response) => {
      if (!response.data.success) {
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
