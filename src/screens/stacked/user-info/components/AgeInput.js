import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeadingText from "../../../../components/texts/HeadingText";
import { TextInput } from "react-native-gesture-handler";
import { CustomColors } from "../../../../custom/custom-colors";

const AgeInput = ({ input = "Age", value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <HeadingText
        textStyle={{ textAlign: "center", color: CustomColors.grey }}
      >
        {input}
      </HeadingText>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />

      <HeadingText
        textStyle={{ textAlign: "center", color: CustomColors.grey }}
      >
        ...............
      </HeadingText>
    </View>
  );
};

export default AgeInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.7)",
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 3,
    borderRadius: 14,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    gap: 20,
    justifyContent: "center",
  },
  input: {
    borderTopColor: CustomColors.blue,
    borderTopWidth: 4,
    borderBottomColor: CustomColors.blue,
    borderBottomWidth: 4,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 38,
    color: CustomColors.white,
    fontFamily: "orbitronBold",
    width: "80%",
    textAlign: "center",
  },
});
