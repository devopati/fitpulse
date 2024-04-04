import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { images } from "../../../../../assets/images";
import ParagraphText from "../../../../components/texts/ParagraphText";
import { containerStyle } from "../../../../custom/custom-styles";
import { CustomColors } from "../../../../custom/custom-colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const BodyAssistContainer = ({ text = "Warm up", image = images.hot }) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container]}>
        <View style={styles.innerCont}>
          <Image source={image} style={styles.image} />
          <AntDesign name="caretright" size={64} color={"rgba(0,0,0,0.3)"} />
        </View>
        <ParagraphText>{text}</ParagraphText>
      </View>
    </TouchableOpacity>
  );
};

export default BodyAssistContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: CustomColors.greyVariant,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingRight: 60,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  image: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 7,
    borderRadius: 20,
    zIndex: 999,
  },
  innerCont: {
    flexDirection: "row",
    gap: -28,
    alignItems: "center",
  },
});
