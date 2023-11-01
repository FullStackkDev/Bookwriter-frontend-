import React, { useCallback, useMemo } from "react";
import Design from "./design";

const Section = ({
  section,
  sections,
  deleteSection,
  updateSection,
  addSubSection,
}) => {
  const subSection = useMemo(
    () => sections.filter((sec) => sec.parent_section_id === section._id),
    [sections, section._id]
  );

  const handleDeleteSection = useCallback(
    () => deleteSection(section._id),
    [deleteSection, section._id]
  );

  const handleUpdateSection = useCallback(
    () => updateSection(section),
    [updateSection, section]
  );

  const handleAddSubSection = useCallback(
    () => addSubSection(section),
    [addSubSection, section]
  );

  return (
    <Design
      section={section}
      sections={sections}
      subSection={subSection}
      handleDeleteSection={handleDeleteSection}
      handleUpdateSection={handleUpdateSection}
      handleAddSubSection={handleAddSubSection}
      deleteSection={deleteSection}
      updateSection={updateSection}
      addSubSection={addSubSection}
    />
  );
};

export default Section;
