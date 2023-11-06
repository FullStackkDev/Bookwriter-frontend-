import React, { useCallback, useMemo } from "react";
import Design from "./design";
import { useDispatch, useSelector } from "react-redux";
import {
  addSection,
  deleteSection,
  updateSection,
} from "../../Redux/store/sectionsSlice.js";

const Section = ({ section }) => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections.list);

  const subSection = useMemo(
    () => sections.filter((sec) => sec.parent_section_id === section._id),
    [sections, section._id]
  );

  const handleAddSubSection = useCallback(
    (newSection) => {
      // HERE MAKE API CALL AND THEN DISPATCH REDUX IN API FILE
      // newSection ARGUMENT IS NOT NEEDED HERE
      return dispatch(addSection(newSection));
    },
    [dispatch]
  );

  const handleUpdateSection = useCallback(
    (newSection) => {
      // HERE MAKE API CALL AND THEN DISPATCH REDUX IN API FILE
      // newSection ARGUMENT IS NOT NEEDED HERE
      return dispatch(updateSection(newSection));
    },
    [dispatch]
  );

  const handleDeleteSection = useCallback(
    (id) => {
      // HERE MAKE API CALL AND THEN DISPATCH REDUX IN API FILE
      // id ARGUMENT IS NOT NEEDED HERE
      return dispatch(deleteSection(id));
    },
    [dispatch]
  );

  return (
    <Design
      section={section}
      subSection={subSection}
      handleAddSubSection={handleAddSubSection}
      handleUpdateSection={handleUpdateSection}
      handleDeleteSection={handleDeleteSection}
    />
  );
};

export default Section;
