export const validationRules = [
  {
    field: "firstName",
    regex: /^[A-Za-z][A-Za-z0-9' -]{2,}$/,
    errorMessage:
      "First name must only contain alphabet, numbers, hyphens, and apostrophes.",
  },
  {
    field: "firstName",
    regex: /^.{3,}$/,
    errorMessage: "First name must be at least 3 characters long.",
  },
  {
    field: "firstName",
    regex: /^[A-Za-z]{1,}[A-Za-z0-9' -]{0,}$/,
    errorMessage: "First name must start with an alphabet.",
  },
  {
    field: "firstName",
    regex: /^.{1,}$/,
    errorMessage: "First name is required.",
  },
  {
    field: "lastName",
    regex: /^[A-Za-z][A-Za-z0-9' -]{2,}$/,
    errorMessage:
      "Last name must only contain alphabet, numbers, hyphens, and apostrophes.",
  },
  {
    field: "lastName",
    regex: /^.{3,}$/,
    errorMessage: "Last name must be at least 3 characters long.",
  },
  {
    field: "lastName",
    regex: /^[A-Za-z]{1,}[A-Za-z0-9' -]{0,}$/,
    errorMessage: "Last name must start with an alphabet.",
  },
  {
    field: "lastName",
    regex: /^.{1,}$/,
    errorMessage: "Last name is required.",
  },
  {
    field: "phoneNo",
    regex: /^\+\d{2}-\d{10}$/,
    errorMessage:
      "Invalid phone number format. Please use the format: +xx-xxxxxxxxxx",
  },
  {
    field: "phoneNo",
    regex: /^.{1,}$/,
    errorMessage: "Phone number is required.",
  },
  {
    field: "email",
    regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    errorMessage: "Invalid E-mail address.",
  },
  {
    field: "email",
    regex: /^.{1,}$/,
    errorMessage: "E-mail is required.",
  },
  {
    field: "password",
    regex: /.{8,}/,
    errorMessage: "Password must be at least 8 characters long.",
  },
  {
    field: "password",
    regex: /^.{1,}$/,
    errorMessage: "Password is required.",
  },
];
