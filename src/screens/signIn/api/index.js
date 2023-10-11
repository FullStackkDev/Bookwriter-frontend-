import axios from "../../../api";
import { userActions } from "../../../Redux/store/userSlice";

export const login = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("/login/", payload);
    dispatch(userActions.addUser(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};

export const loginWith3rdParty = async (user) => {
  try {
    const response = await axios.post("/third-party-user-login/", user);
    const userDetail = response.data.payload;
    if (response.data.success) {
      window.localStorage.setItem("user", JSON.stringify(userDetail));
    }
    return response;
  } catch (error) {
    return error;
  }
};
