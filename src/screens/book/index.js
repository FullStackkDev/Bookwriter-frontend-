import React, { useEffect, useMemo, useState } from "react";
import Design from "./design";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSections } from "./api";

function Book() {
  const dispatch = useDispatch();

  // HERE WE CAN GET BOOK ID BY USING PARAMS
  // const { id } = useParams();
  // const id = "6548c414d63423f7c2d27308"; // URDU BOOK ID
  const id = "6548c48bd63423f7c2d2730d"; // CHEMISTRY BOOK ID
  // console.log(id, "Params book ID");
  // HERE WE CAN GET BOOK ID BY USING PARAMS

  const sections = useSelector((state) => state.sections.list);
  const token = useSelector((state) => state.auth.token);

  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [parentSectionID, setParentSectionID] = useState(null);

  const filterSections = useMemo(
    () =>
      sections.filter(
        (section) =>
          section.book_id === id && section.parent_section_id === null
      ),
    [sections]
  );

  const handleAddMainSection = () => {
    setShowAddSectionModal((prevState) => !prevState);
    setParentSectionID(null);
  };

  useEffect(() => {
    if (!sections.length) {
      dispatch(getSections(token)).then(() => {});
    }
  }, [sections.length, dispatch, token]);

  return (
    <Design
      filterSections={filterSections}
      handleAddMainSection={handleAddMainSection}
      showAddSectionModal={showAddSectionModal}
      setShowAddSectionModal={setShowAddSectionModal}
      parentSectionID={parentSectionID}
      setParentSectionID={setParentSectionID}
    />
  );
}

export default Book;
