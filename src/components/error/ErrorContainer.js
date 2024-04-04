import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ParagraphText from "../texts/ParagraphText";
import { CustomColors } from "../../custom/custom-colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const ErrorContainer = ({
  errTitle = "An error occurred",
  errText = "There was an error while making your request, please re-try or contact for support",
  onPress = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerCont}>
        <ParagraphText>{errTitle}</ParagraphText>
        <ParagraphText>{errText}</ParagraphText>

        <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
          <ParagraphText>Okay</ParagraphText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ErrorContainer;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    marginTop: -30,
  },
  innerCont: {
    backgroundColor: CustomColors.greyVariant,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 10,
    gap: 22,
    width: Dimensions.get("window").width - 20,
    alignSelf: "center",
  },
  btn: {
    backgroundColor: CustomColors.blue,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
