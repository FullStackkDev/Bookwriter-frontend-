import React from "react";
import { Box, Button, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Section from ".";
import { styles } from "./style.js";

const Design = ({
  section,
  sections,
  subSection,
  handleDeleteSection,
  handleUpdateSection,
  handleAddSubSection,
  deleteSection,
  updateSection,
  addSubSection,
}) => {
  const { sectionContainer, introContainer, title, buttonsStyling } = styles;

  return (
    <Box sx={sectionContainer}>
      <Box sx={introContainer}>
        <Typography sx={title} paragraph>
          {section.title}
        </Typography>
        <Box>
          <Button
            variant={"text"}
            size="small"
            sx={buttonsStyling}
            endIcon={<AddIcon />}
            onClick={handleAddSubSection}
          >
            Add
          </Button>
          <Button
            color="secondary"
            variant={"text"}
            size="small"
            sx={buttonsStyling}
            endIcon={<EditIcon />}
            onClick={handleUpdateSection}
          >
            Edit
          </Button>
          <Button
            paragraph
            variant={"text"}
            size="small"
            color="error"
            sx={buttonsStyling}
            endIcon={<DeleteForeverIcon />}
            onClick={handleDeleteSection}
          >
            Delete
          </Button>
        </Box>
      </Box>
      <Typography paragraph m={0}>
        {section.content}
      </Typography>

      {subSection.length !== 0 &&
        subSection?.map((childSection) => (
          <Section
            key={childSection._id}
            section={childSection}
            sections={sections}
            deleteSection={deleteSection}
            updateSection={updateSection}
            addSubSection={addSubSection}
          />
        ))}
    </Box>
  );
};

export default Design;
