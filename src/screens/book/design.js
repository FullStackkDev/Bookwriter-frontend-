import React from "react";
import Section from "../../components/Section";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./style.js";

const Design = ({ filterSections, handleAddMainSection }) => {
  const {
    mainContainer,
    mainContainerBook,
    bookTitle,
    bookAuthorDate,
    bookDescription,
    AddSectionButtonContainer,
  } = styles;
  return (
    <>
      <Box sx={mainContainer}>
        <Box sx={mainContainerBook}>
          <Typography variant="h4" sx={bookTitle}>
            BOOK TITLE
          </Typography>

          <Typography variant="h6" sx={bookAuthorDate}>
            April 1, 2020 by Olivier
          </Typography>
          <Typography sx={bookDescription}>
            This blog post shows a few different types of content that are
            supported and styled with Material styles. Basic typography, images,
            and code are all supported. You can extend these by modifying
            Markdown.js. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Sed posuere
            consectetur est at lobortis. Cras mattis consectetur purus sit amet
            fermentum.
          </Typography>
        </Box>

        <Box sx={AddSectionButtonContainer}>
          <Button
            variant={"contained"}
            onClick={() => {
              // HERE ONLY CALL HANDLER FUNCTION NO PARAMETERS WITH FUNCTION
              const newSection = {
                title: "TEST",
                _id: `section-${Date.now()}-${Math.random()
                  .toString(16)
                  .slice(2)}`,
                parent_section_id: null,
                book_id: "Bio1",
                content:
                  "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
              };
              handleAddMainSection(newSection);
            }}
          >
            Add Section
          </Button>
        </Box>
        {filterSections?.map((section) => (
          <Section key={section._id} section={section} />
        ))}
        {filterSections.length === 0 && (
          <Typography variant="h6" sx={bookTitle}>
            NO SECTION FOUND PLEASE ADD SECTION
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Design;
