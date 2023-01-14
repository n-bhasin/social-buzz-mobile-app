import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../utils/colors";

const AppButton = ({ title, style, disabled, onPress, color = "buttonBg" }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { backgroundColor: disabled ? colors.grey : colors[color] },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBg,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: "bold",
  },
});
export default AppButton;
