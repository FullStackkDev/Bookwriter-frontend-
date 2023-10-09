export const validationRules = [
    {
      field: 'email',
      regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      errorMessage: 'Invalid email address.',
    },
    {
      field: 'password',
      regex: /.{8,}/,
      errorMessage: 'Password must be at least 8 characters long.',
    },
  ];
  