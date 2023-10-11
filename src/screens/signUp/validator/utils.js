import { validationRules } from "./rules";

// validation
export const validateForm = (formData) => {
  const errors = {};

  validationRules.forEach((rule) => {
    const { field, regex, errorMessage } = rule;

    if (formData.hasOwnProperty(field)) {
      if (!regex.test(formData[field])) {
        errors[field] = errorMessage;
      }
    }
  });

  return errors;
};
