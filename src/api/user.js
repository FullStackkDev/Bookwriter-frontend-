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
  console.log(user);
  try {
    const response = await axios.post("/login/", user);
    console.log(response);
    window.localStorage.setItem("token", response.data.payload.token);
    return response;
  } catch (error) {
    return error;
  }
};
