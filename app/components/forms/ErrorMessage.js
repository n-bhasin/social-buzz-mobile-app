import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <AppText style={styles.container}>{error}</AppText>;
};

const styles = StyleSheet.create({
  container: { color: "red" },
});
export default ErrorMessage;
