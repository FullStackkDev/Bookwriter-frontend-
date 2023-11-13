import React from "react";
import Section from "../../components/Section";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./style.js";
import AddSectionModal from "../../components/Modal/SectionModal/AddSectionModal/index.js";

const Design = ({
  filterSections,
  handleAddMainSection,
  showAddSectionModal,
  setShowAddSectionModal,
  parentSectionID,
  setParentSectionID,
}) => {
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
          <Button variant={"contained"} onClick={handleAddMainSection}>
            Add Section
          </Button>
        </Box>
        {filterSections?.map((section) => (
          <Section
            key={section._id}
            section={section}
            setShowAddSectionModal={setShowAddSectionModal}
            setParentSectionID={setParentSectionID}
          />
        ))}
        {filterSections.length === 0 && (
          <Typography variant="h6" sx={bookTitle}>
            NO SECTION FOUND PLEASE ADD SECTION
          </Typography>
        )}
      </Box>
      {showAddSectionModal && (
        <AddSectionModal
          showAddSectionModal={showAddSectionModal}
          setShowAddSectionModal={setShowAddSectionModal}
          parentSectionID={parentSectionID}
        />
      )}
    </>
  );
};

export default Design;
