import { userActions } from "../../../Redux/store/userSlice";
import axios from "../../../api";

export const addNewUser = async (newUser) => {
  try {
    const response = await axios.post("/register-user/", newUser);
    return response;
  } catch (error) {
    return error;
  }
};

export const loginWith3rdParty = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("/third-party-user-login/", payload);
    dispatch(userActions.addUser(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};
