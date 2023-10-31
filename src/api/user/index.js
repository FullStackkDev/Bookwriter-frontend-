import axios from "../";
import { userActions } from "../../Redux/store/userSlice";

export const updateUser = (payload, token, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/user/${id}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.success) {
      dispatch(userActions.getUser(response.data.payload));
    }
    return response;
  } catch (error) {
    return error;
  }
};
