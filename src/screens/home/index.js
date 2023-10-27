// SignUp/index.js
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { dummyBooks } from "./api";
import Design from "./design";
function Home() {
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [bookData, setBookData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setBookData(dummyBooks);
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Filter books based on the search query
  const filteredBooks = bookData.filter((book) =>
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

  function truncateText(title, words) {
    const wordArray = title.split(" ");
    if (wordArray.length > words) {
      return wordArray.slice(0, words).join(" ") + "...";
    }
    return title;
  }

  return (
    <div>
      <Design
        currentPage={currentPage}
        searchQuery={searchQuery}
        currentCards={currentCards}
        filteredBooks={filteredBooks}
        cardsPerPage={cardsPerPage}
        handlePageChange={handlePageChange}
        handleSearch={handleSearch}
        truncateText={truncateText}
      />
    </div>
  );
}

export default Home;
