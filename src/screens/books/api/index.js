import axios from "../../../api";
import { booksActions } from "../../../Redux/store/bookSlice";

export const getBooks = (token) => async (dispatch) => {
  try {
    const response = await axios.get("/book", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success)
      dispatch(booksActions.setBooks(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};
