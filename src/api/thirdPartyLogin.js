import { userActions } from "../Redux/store/userSlice";
import axios from ".";

export const loginWith3rdParty = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("/user", payload);
    if (response.data.success)
      dispatch(userActions.addUser(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};
