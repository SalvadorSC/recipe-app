import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export const useSubmitData = (data, setData, validateForm) => {
  let history = useHistory();
  const [newData, setNewData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitNewdata = (e) => {
    e.preventDefault();
    setErrors(validateForm(newData));
    setIsSubmitting(true);
    console.log(newData);
    console.log(errors);
  };

  /* const handleSubmit = useCallback(() => {
    setData([...data, newData]);
    history.push("/");
    setNewData({});
  }, [data, history, newData, setData]); */

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setData([...data, newData]);
      history.push("/");
      setNewData({});
    }
  }, [errors]);

  const changeNewDataValue = (e) => {
    let valueName = e.target.name;
    let value = e.target.value;
    setErrors({ ...errors, [valueName]: false });
    setNewData({
      ...newData,
      [valueName]: value.split(", "),
    });
  };

  return {
    submitNewdata,
    changeNewDataValue,
    errors,
  };
};

useSubmitData.propTypes = {
  errors: PropTypes.object,
  data: PropTypes.object,
  newData: PropTypes.object,
};
