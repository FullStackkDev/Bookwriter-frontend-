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

export const addBook = (payload, token) => async (dispatch) => {
  try {
    const response = await axios.post(`/book`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.bookPayload?.success) {
      dispatch(booksActions.addBook(response.data.bookPayload.payload));
    }
    return response;
  } catch (error) {
    return error;
  }
};
