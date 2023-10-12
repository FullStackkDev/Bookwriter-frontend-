import axios from "../../../api";
import { userActions } from "../../../Redux/store/userSlice";

export const login = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("/login/", payload);
    if(response.data.success) dispatch(userActions.addUser(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};

export const loginWith3rdParty = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("/third-party-user-login/", payload);
    if(response.data.success) dispatch(userActions.addUser(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};
