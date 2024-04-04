import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { images } from "../../../../../assets/images";
import ParagraphText from "../../../../components/texts/ParagraphText";
import { TouchableOpacity } from "react-native-gesture-handler";

const PlanContainer = ({
  text = "Day 1 warm up",
  image = images.workout_plan1,
  disabled = false,
}) => {
  return (
    <TouchableOpacity style={styles.container} disabled={disabled}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ borderRadius: 20 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 20,
          }}
        >
          <ParagraphText style={styles.textCont}>{text}</ParagraphText>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PlanContainer;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width - 10,
    alignSelf: "center",
    borderRadius: 20,
  },
  textCont: {
    position: "absolute",
    bottom: 20,
    left: 15,
  },
});
