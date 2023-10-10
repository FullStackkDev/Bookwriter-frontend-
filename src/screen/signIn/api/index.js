import axios from "../../../api";

export const login = async (user) => {
  try {
    const response = await axios.post("/login/", user);
    const userDetail = response.data.payload;
    if (response.data.success) {
      window.localStorage.setItem("user", JSON.stringify(userDetail));
    }
    return response;
  } catch (error) {
    return error;
  }
};
