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

export const loginWith3rdParty = async (user) => {
  try {
    const response = await axios.post("/third-party-user-login/", user);
    const userDetail = response.data.payload;
    console.log("userDetail => ", JSON.stringify(userDetail));
    if (response.data.success) {
      window.localStorage.setItem("user", JSON.stringify(userDetail));
    }
    return response;
  } catch (error) {
    return error;
  }
};
