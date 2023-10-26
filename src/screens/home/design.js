import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Pagination,
  Typography,
} from "@mui/material";
import bgImage from "../../asset/1.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import SearchIcon from "@mui/icons-material/Search";

import Footer from "../../components/Footer";
import {
  containerStyles,
  backgroundImageStyles,
  badgeStyles,
  gridStyles,
} from "./style";
import { dummyBooks } from "./api/index";

function Design() {
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

  return (
    <>
      <Box sx={containerStyles}>
        <div style={backgroundImageStyles} />
        <Container>
          <Typography
            variant="h1"
            color="primary"
            align="center"
            style={{
              fontWeight: "bold",
              fontSize: "3rem",
              letterSpacing: "2px",
              marginBottom: "1rem",
            }}
          >
            Book Writer
          </Typography>
          <Typography variant="h5" color="textSecondary" align="center">
            <span
              style={{
                fontStyle: "italic",
                fontSize: "1.2rem",
                display: "block",
                margin: "1rem 0",
              }}
            >
              Write to Live
            </span>
            <span style={{ fontSize: "1.1rem" }}>
              "There is no greater agony than bearing an untold story inside
              you."
            </span>
            <span
              style={{ fontSize: "1rem", display: "block", marginTop: "1rem" }}
            >
              - Maya Angelou
            </span>
          </Typography>
        </Container>
      </Box>

      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={gridStyles}
      >
        <Badge sx={badgeStyles} badgeContent="Book Writer" container />
        <Typography variant="h4" fontWeight="bold">
          Write with the door closed, rewrite with the door open
        </Typography>
        <Typography variant="body1" color="text">
          - Stephen King
        </Typography>
      </Grid>

      {/* <Grid
        container
        spacing={4}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {Array.from({ length: 10 }).map((index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 300, margin: "1rem" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    AA
                  </Avatar>
                }
                title="One piece"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image={bgImage} // Provided image of a book
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Follow the adventures of Monkey D. Luffy and his crew as they
                  search for the legendary One Piece treasure in this
                  long-running and beloved manga series.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      <Container>
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
            <Card sx={{ maxWidth: 300, margin: "1rem" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="book">
                    {book.title.charAt(0)}
                  </Avatar>
                }
                title={book.title}
                subheader={book.publishedDate}
              />
              <CardMedia
                component="img"
                height="194"
                image={bgImage}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {book.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(filteredBooks.length / cardsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
      />

      <Footer />
    </>
  );
}

export default Design;
