import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  Pagination,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../components/Navbar/api";
import { styles } from "./style";
import { dummyBooks } from "./api";
import { truncateText } from "../../helper/function";
import SearchIcon from "@mui/icons-material/Search";

const Books = () => {
  const { avatar, bookCard, cardHeader, cardContent, pagination } = styles;

  const user = useSelector((state) => state.user.user);

  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [bookData, setBookData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const [booksWritten, setBooksWritten] = useState(0);
  const [booksCollab, setBooksCollab] = useState(0);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setBookData(dummyBooks);
  }, []);

  useEffect(() => {
    if (!Object.keys(user).length) {
      dispatch(getUser(token));
    }
  }, [dispatch, token, user]);

  return (
    <>
      <Container>
        <Grid container justifyContent="center" py={6}>
          <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Box display="flex" alignItems="center">
                <Avatar sx={avatar} aria-label="book">
                  {user.first_name.charAt(0)}
                  {user.last_name.charAt(0)}
                </Avatar>
                <Typography
                  variant="h3"
                  ml={2}
                >{`${user.first_name} ${user.last_name}`}</Typography>
              </Box>
              <Button variant="outlined" color="info" size="small">
                Write a book
              </Button>
            </Box>
            <Grid container spacing={3} mb={3}>
              <Grid item>
                <Typography component="span" variant="body2" color="text">
                  {`${booksWritten} Books`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="span" variant="body2" color="text">
                  {`${booksCollab} Collabrator`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item justifyContent="center" xs={12} lg={4} mx="auto">
          <Tabs
            value={activeTab}
            onChange={handleTabType}
            sx={{ backgroundColor: "#eeeeee" }}
          >
            <Tab label="Write books" />
            <Tab label="Coloaded books" />
          </Tabs>
        </Grid>
      </Container>

      <Container sx={{ marginTop: "30px" }}>
        <OutlinedInput
          type="text"
          placeholder="Search books by name"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          fullWidth
          value={searchQuery}
          onChange={handleSearch}
        />
      </Container>

      <Grid
        container
        spacing={4}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {currentCards.map((book, index) => (
          <Grid item key={index}>
            <Card sx={bookCard}>
              <CardHeader
                avatar={
                  <Avatar sx={avatar} aria-label="book">
                    {book.title.charAt(0)}
                  </Avatar>
                }
                sx={cardHeader}
                title={truncateText(book.title, 5)}
                subheader={book.publishedDate}
              />
              <CardMedia
                component="img"
                height="194"
                image={book.coverImageUrl}
                alt={book.title}
              />
              <CardContent sx={cardContent}>
                <Typography variant="body2" color="text.secondary">
                  {truncateText(book.description, 25)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(filteredBooks.length / cardsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={pagination}
      />

      <Footer />
    </>
  );
};

export default Books;
