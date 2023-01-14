import { Field, Formik } from "formik";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import * as yup from "yup";
import AppButton from "../components/AppButton";
import AppCheckbox from "../components/AppCheckbox";
import AppText from "../components/AppText";
import { AppFormInput, ErrorMessage } from "../components/forms";
import Screen from "../components/Screen";
import colors from "../utils/colors";

const validation = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valida email")
    .strict(true),
  password: yup.string().required("Password is required"),
});
const LoginScreen = (props) => {
  const [initialValue, setInitialValue] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [error, setError] = useState(false);

  const onSubmit = ({ email, password, rememberMe }) => {
    try {
      console.log("handlesubmit", { email, password, rememberMe });
      setError(true);
    } catch (err) {
      console.log("login err", err);
    }
  };
  return (
    <Screen style={styles.screen}>
      <Image
        style={styles.logo}
        source={require("../resources/icons/social-buzz-logo.png")}
      />
      <Formik
        validationSchema={validation}
        initialValues={initialValue}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ handleSubmit, values, isValid }) => (
          <>
            <ErrorMessage visible={error} error="Invalid Email or Password!" />
            <Field
              component={AppFormInput}
              required
              label="Email"
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Field
              component={AppFormInput}
              required
              //   icon="lock"
              label="Password"
              name="password"
              placeholder="Password"
              secureTextEntry={isSecureEntry}
              icon={isSecureEntry ? "eye-off" : "eye"}
              iconPosition="right"
              iconOnPress={() => setIsSecureEntry(!isSecureEntry)}
              maxWidth={Dimensions.get("screen").width - 80}
            />
            <View style={styles.rememberMeWrapper}>
              <Field
                component={AppCheckbox}
                label="Remember me"
                name="rememberMe"
                type="checkbox"
              />
              <TouchableOpacity style={{ marginRight: 20 }}>
                <AppText style={[styles.signUpText, styles.forgetPassword]}>
                  Forget Password?
                </AppText>
              </TouchableOpacity>
            </View>

            <AppButton
              title="login"
              onPress={handleSubmit}
              disabled={!isValid}
              style={{ marginTop: 35 }}
            />
            <View style={styles.account}>
              <AppText style={[styles.signUpText]}>
                New to Social Buzz?{" "}
              </AppText>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <AppText
                  style={[
                    styles.signUpText,
                    { textDecorationLine: "underline", fontWeight: "700" },
                  ]}
                >
                  Sign up
                </AppText>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: { padding: 10 },
  logo: { width: "100%", height: 100, alignSelf: "center", marginTop: 50 },
  account: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    justifyContent: "center",
  },
  forgetPassword: { fontSize: 15, fontWeight: "500" },
  signUpText: { color: colors.subTitle, fontWeight: "500" },
  rememberMeWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default LoginScreen;
