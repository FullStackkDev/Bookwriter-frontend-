import axios from "../../../api";

export const addNewUser = async (newUser) => {
  console.log(newUser);
  try {
    const response = await axios.post("/register-user/", newUser);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
