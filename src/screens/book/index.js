import React, { useCallback, useMemo } from "react";
import Design from "./design";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSection } from "../../Redux/store/sectionsSlice";

function Book() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "Params book ID");

  const sections = useSelector((state) => state.sections.list);

  const filterSections = useMemo(
    () => sections.filter((section) => section.parent_section_id === null),
    [sections]
  );

  const handleAddMainSection = useCallback(
    (newSection) => {
      // HERE MAKE API CALL AND THEN DISPATCH REDUX IN API FILE
      // newSection ARGUMENT IS NOT NEEDED HERE
      return dispatch(addSection(newSection));
    },
    [dispatch]
  );

  return (
    <Design
      filterSections={filterSections}
      handleAddMainSection={handleAddMainSection}
    />
  );
}

export default Book;
