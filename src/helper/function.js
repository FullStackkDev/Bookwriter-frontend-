// handle Input Change.

import { loginWith3rdParty } from "../api/thirdPartyLogin";
import { UNABLE_TO_CONTINUE } from "../utils/messages";
import { showToast } from "./tosat";

export const handleChange = (event, stateData, setStateData) => {
  const { name, value } = event.target;
  setStateData({
    ...stateData,
    [name]: value,
  });
};

export const handle3rdPartyIntegration = (response, dispatch, provider) => {
  let payload = {};
  if (provider === "facebook") {
    const { first_name, last_name, email, userID } = response;
    payload = {
      first_name: first_name,
      last_name: last_name ? last_name : first_name,
      email: email,
      third_party_user_id: userID,
      third_party_type: provider,
    };
  } else {
    const { given_name, family_name, email, sub } = response;
    payload = {
      first_name: given_name,
      last_name: family_name ? family_name : given_name,
      email: email,
      third_party_user_id: sub,
      third_party_type: provider,
    };
  }
  dispatch(loginWith3rdParty(payload))
    .then((response) => {
      if (!response.data.success) {
        showToast(response.data.message, "error");
      }
    })
    .catch((error) => {
      showToast(UNABLE_TO_CONTINUE, "error");
    });
};
