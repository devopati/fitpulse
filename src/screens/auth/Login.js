import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthTop from "./components/AuthTop";
import { containerStyle } from "../../custom/custom-styles";
import HeadingText from "../../components/texts/HeadingText";
import AuthButton from "./components/AuthButton";
import AuthInputField from "./components/AuthInputField";
import { TouchableOpacity } from "react-native-gesture-handler";
import ParagraphText from "../../components/texts/ParagraphText";

const Login = ({ pagerRef }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.top}>
        <AuthTop
          text="SIGNUP"
          onPress={() => pagerRef.current.setPageWithoutAnimation(0)}
        />
        <AuthTop active />
      </View>

      <View style={styles.textView}>
        <HeadingText textStyle={styles.text}>
          {"Good to see you \nback."}
        </HeadingText>
      </View>

      <View style={styles.bottomView}>
        <AuthInputField />
        <AuthInputField placeholder="Password" />

        <TouchableOpacity style={styles.forgotPass}>
          <ParagraphText>Forgot password?</ParagraphText>
        </TouchableOpacity>
        <AuthButton text="Login" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    gap: 50,
  },
  top: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 34,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  textView: {
    gap: 35,
    paddingTop: 40,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "orbitronBold",
  },
  bottomView: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 8,
    gap: 20,
  },
  forgotPass: {
    alignSelf: "flex-end",
    paddingRight: 18,
    paddingVertical: 8,
  },
});
