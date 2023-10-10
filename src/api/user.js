import axios from ".";

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

export const login = async (user) => {
  try {
    const response = await axios.post("/login/", user);
    const userDetail = response.data.payload;
    window.localStorage.setItem("user", JSON.stringify(userDetail));
    return response;
  } catch (error) {
    return error;
  }
};
