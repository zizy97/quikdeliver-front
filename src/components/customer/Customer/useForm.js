import React, { useState } from "react"; //react

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...value, [name]: value });
  };

  return {
    values,
    setValues,
    handleChange,
  };
}

export function Form(props) {
  return <div>{props.children}</div>;
}
