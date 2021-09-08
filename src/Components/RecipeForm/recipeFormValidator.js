export const recipeFormValidator = (data) => {
  // La validación del formulario falla cuando se escribe primero un campo y después se borra, dejando que se publique una receta sin tener campos.

  let errors = {};
  if (data.name === undefined || data.name === "") errors.name = true;
  if (data.ingredients === undefined || data.ingredients === "")
    errors.ingredients = true;
  console.log("errors");
  console.log(errors);
  return errors;
};
