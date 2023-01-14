import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppTextInput = ({
  icon,
  width = "100%",
  iconPosition,
  inputMaxWidth,
  iconOnPress,
  ...otherProps
}) => {
  const getDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    }
  };
  return (
    <View
      style={[
        styles.container,
        {
          width,
          alignItems: "center",
          display: "flex",
          flexDirection: icon ? getDirection() : "row-reverse",
        },
      ]}
    >
      {icon && (
        <MaterialCommunityIcons
          onPress={iconOnPress}
          style={styles.icon}
          name={icon}
          size={20}
        />
      )}
      <TextInput
        placeholderTextColor={"#a6a6a6"}
        style={[styles.textInput, inputMaxWidth]}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        returnKeyType="done"
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f5fa",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    width: "100%",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icon: {
    marginRight: 10,
    color: "#a6a6a6",
  },
});
export default AppTextInput;
