import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeadingText from "../../../components/texts/HeadingText";
import { CustomColors } from "../../../custom/custom-colors";

const AuthTop = ({ text = "LOGIN", active = false, onPress }) => {
  return (
    <TouchableOpacity style={active ? styles.container : {}} onPress={onPress}>
      <HeadingText textStyle={[styles.text, active && styles.activeText]}>
        {text}
      </HeadingText>
    </TouchableOpacity>
  );
};

export default AuthTop;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: CustomColors.blue,
    borderBottomWidth: 3,
  },
  text: {
    color: CustomColors.grey,
  },
  activeText: {
    fontSize: 30,
    color: CustomColors.white,
  },
});
