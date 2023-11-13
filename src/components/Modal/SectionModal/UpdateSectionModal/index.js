import React, { useState } from "react";
import Design from "./design";
import { useParams } from "react-router-dom";
import { updateSections } from "../../../../screens/book/api";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../../../helper/tosat";
import { validationRules } from "./validator/rules";
import { validateForm } from "../../../../utils/utils";

const UpdateSectionModal = ({
  showUpdateSectionModal,
  setShowUpdateSectionModal,
  section,
}) => {
  // HERE WE CAN GET BOOK ID BY USING PARAMS
  // const { id } = useParams();
  // const id = "6548c414d63423f7c2d27308"; // URDU BOOK ID
  const id = "6548c48bd63423f7c2d2730d"; // CHEMISTRY BOOK ID
  // console.log(id, "Params book ID");
  // HERE WE CAN GET BOOK ID BY USING PARAMS

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [sectionData, setSectionData] = useState({
    title: section.title || "",
    content: section.content || "",
  });
  const [errors, setErrors] = useState({});

  const toggleModal = () =>
    setShowUpdateSectionModal((prevState) => !prevState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(sectionData, validationRules);

    if (Object.keys(validationErrors).length === 0) {
      let payload = {
        ...sectionData,
        book_id: id,
        parent_section_id: section.parent_section_id,
      };

      dispatch(updateSections(token, payload, section._id))
        .then((response) => {
          if (response.data.success) {
            showToast(
              response.data.message,
              response.data.success ? "success" : "error"
            );
            setShowUpdateSectionModal((prevState) => !prevState);
          } else {
            setErrors(response.data.message.error);
          }
        })
        .catch((error) => {
          showToast(
            "Unable to Update Section, Internal Server Error, please try again!",
            "error"
          );
          console.log(error);
        });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Design
      showUpdateSectionModal={showUpdateSectionModal}
      toggleModal={toggleModal}
      handleSubmit={handleSubmit}
      sectionData={sectionData}
      setSectionData={setSectionData}
      errors={errors}
    />
  );
};

export default UpdateSectionModal;
