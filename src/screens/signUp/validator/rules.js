export const validationRules = [
  {
    field: "firstName",
    regex: /^[A-Za-z][A-Za-z0-9' -]{2,}$/,
    errorMessage:
      "First name must start with an alphabet with least of 3 character and contain only letters, numbers, hyphens, and apostrophes.",
  },
  {
    field: "lastName",
    regex: /^[A-Za-z][A-Za-z0-9' -]{2,}$/,
    errorMessage:
      "Last name must start with an alphabet with least of 3 character and contain only letters, numbers, hyphens, and apostrophes.",
  },
  {
    field: "phoneNo",
    regex: /^\+\d{2}-\d{10}$/,
    errorMessage:
      "Invalid phone number format. Please use the format: +xx-xxxxxxxxxx",
  },
  {
    field: "email",
    regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    errorMessage: "Invalid email address.",
  },
  {
    field: "password",
    regex: /.{8,}/,
    errorMessage: "Password must be at least 8 characters long.",
  },
];
