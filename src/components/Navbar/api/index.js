import axios from "../../../api";
import { userActions } from "../../../Redux/store/userSlice";

export const getUser = (token) => async (dispatch) => {
  try {
    const response = await axios.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success)
      dispatch(userActions.getUser(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};
