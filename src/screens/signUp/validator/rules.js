export const validationRules = [
  {
    field: "firstName",
    regex: /^[A-Za-z]/,
    errorMessage: "First name must start with an alphabet.",
  },
  {
    field: "lastName",
    regex: /^[A-Za-z]/,
    errorMessage: "Last name must start with an alphabet.",
  },
  {
    field: "phoneNo",
    regex: /^\+?\d{0,3}-?\d{4,15}$/,
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
