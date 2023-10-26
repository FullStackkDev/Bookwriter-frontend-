import axios from ".";
import { authActions } from "../Redux/store/authSlice";
import { getUser } from "../components/Navbar/api";

export const loginWith3rdParty = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("/user", payload);
    if (response.data.success) {
      dispatch(authActions.Login(response.data.payload));
      dispatch(getUser(response.data.payload.token));
    }
    return response;
  } catch (error) {
    return error;
  }
};
