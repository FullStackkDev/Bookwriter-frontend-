import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../components/Navbar/api";
import { getBooks } from "./api";
import Design from "./design";

const Books = () => {
  const user = useSelector((state) => state.user.user);

  const token = useSelector((state) => state.auth.token);

  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  const [bookloading, setBookloading] = useState(false);

  const [userloading, setUserloading] = useState(false);

  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Filter books based on the search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentCards = filteredBooks.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const [booksWritten, setBooksWritten] = useState(0);
  const [booksCollab, setBooksCollab] = useState(0);

  const [activeTab, setActiveTab] = useState("My books");

  const handleTabType = (event, newValue) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    if (!books.length) {
      setBookloading(true);
      dispatch(getBooks(token)).then(() => {
        setBookloading(false);
      });
    }
  }, [books.length, dispatch, token]);

  useEffect(() => {
    if (!Object.keys(user).length) {
      setUserloading(true);
      dispatch(getUser(token)).then(() => {
        setUserloading(false);
      });
    }
  }, [dispatch, token, user]);

  return (
    <Design
      user={user}
      currentPage={currentPage}
      booksWritten={booksWritten}
      booksCollab={booksCollab}
      activeTab={activeTab}
      handleTabType={handleTabType}
      handleSearch={handleSearch}
      searchQuery={searchQuery}
      currentCards={currentCards}
      filteredBooks={filteredBooks}
      cardsPerPage={cardsPerPage}
      handlePageChange={handlePageChange}
      bookloading={bookloading}
      userloading={userloading}
    />
  );
};

export default Books;
