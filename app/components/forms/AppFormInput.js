import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormInput = (props) => {
  const {
    field: { name, onBlur, onChange, value, width },
    form: { errors, touched, setFieldTouched },
    ...otherProps
  } = props;
  const hasError = errors[name] && touched[name];

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => onChange(name)(text)}
        value={value}
        {...otherProps}
      />
      {hasError && (
        <ErrorMessage visible={touched[name]} error={errors[name]} />
      )}
    </>
  );
};

export default AppFormInput;
