import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeadingText from "../../../components/texts/HeadingText";
import { CustomColors } from "../../../custom/custom-colors";
import { useSelector } from "react-redux";

const AuthButton = ({ text = "Sign up", onPress }) => {
  const { isLoading } = useSelector((state) => state.auth);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <HeadingText>{isLoading ? "please wait..." : text}</HeadingText>
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
