import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { CustomColors } from "../../../custom/custom-colors";

const AuthInputField = ({
  placeholder = "Email",
  inputMode,
  value,
  onChangeText,
  secureTextEntry = false,
  autoCapitalize,
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={"#6C95FF"}
        cursorColor={"#6C95FF"}
        inputMode={inputMode}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

export default AuthInputField;

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: "#434343",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 22,
    fontSize: 17,
    color: CustomColors.white,
    fontFamily: "orbitronSemiBold",
  },
});
