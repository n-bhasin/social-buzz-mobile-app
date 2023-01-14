import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./app/screen/LoginScreen";

export default function App() {
  return <LoginScreen></LoginScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
