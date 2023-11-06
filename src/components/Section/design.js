import React from "react";
import { Box, Button, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Section from ".";
import { styles } from "./style.js";

const Design = ({
  section,
  subSection,
  handleAddSubSection,
  handleUpdateSection,
  handleDeleteSection,
}) => {
  const { sectionContainer, introContainer, title, buttonsStyling } = styles;

  return (
    <Box sx={sectionContainer}>
      <Box sx={introContainer}>
        <Typography sx={title}>{section.title}</Typography>
        <Box>
          <Button
            variant={"text"}
            size="small"
            sx={buttonsStyling}
            endIcon={<AddIcon />}
            onClick={() => {
              // HERE ONLY CALL HANDLER FUNCTION NO PARAMETERS WITH FUNCTION
              const newSection = {
                title: "TEST",
                _id: `section-${Date.now()}-${Math.random()
                  .toString(16)
                  .slice(2)}`,
                parent_section_id: section._id,
                book_id: "Bio1",
                content:
                  "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
              };
              handleAddSubSection(newSection);
            }}
          >
            Add
          </Button>
          <Button
            color="secondary"
            variant={"text"}
            size="small"
            sx={buttonsStyling}
            endIcon={<EditIcon />}
            onClick={() => {
              // HERE ONLY CALL HANDLER FUNCTION NO PARAMETERS WITH FUNCTION
              const newSection = {
                ...section,
                title: "UPDATED",
              };
              handleUpdateSection(newSection);
            }}
          >
            Edit
          </Button>
          <Button
            variant={"text"}
            size="small"
            color="error"
            sx={buttonsStyling}
            endIcon={<DeleteForeverIcon />}
            onClick={() => {
              // HERE ONLY CALL HANDLER FUNCTION NO PARAMETERS WITH FUNCTION
              handleDeleteSection(section._id);
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
      <Typography m={0}>{section.content}</Typography>

      {subSection.length !== 0 &&
        subSection?.map((childSection) => (
          <Section key={childSection._id} section={childSection} />
        ))}
    </Box>
  );
};

export default Design;
