export const validateForm = (values) => {
  let errors = {};

  if (values.name === "") errors.name = true;

  return errors;
};
