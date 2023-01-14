import React from "react";
import Checkbox from "expo-checkbox";
import { View, StyleSheet } from "react-native";
import colors from "../utils/colors";
import AppText from "./AppText";

const AppCheckbox = (props) => {
  const {
    field: { name, value },
    form: { errors, touched, setFieldValue },
    label,
    ...otherProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox
        style={styles.checkbox}
        value={value}
        onValueChange={(newValue) => setFieldValue(name, newValue)}
        color={value ? colors.theme : colors.theme}
        {...otherProps}
      />
      {label && (
        <AppText
          style={styles.clickableText}
          onPress={() => setFieldValue(name, !value)}
        >
          {label}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: { flexDirection: "row", alignItems: "center" },
  checkbox: { marginRight: 8, marginLeft: 20 },
  clickableText: { fontSize: 15, fontWeight: "500", color: colors.subTitle },
});
export default AppCheckbox;
