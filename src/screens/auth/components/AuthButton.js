import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeadingText from "../../../components/texts/HeadingText";
import { CustomColors } from "../../../custom/custom-colors";

const AuthButton = ({ text = "Sign up", onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <HeadingText>{text}</HeadingText>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CustomColors.blue,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
