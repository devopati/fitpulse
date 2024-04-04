import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { images } from "../../../../../assets/images";
import ParagraphText from "../../../../components/texts/ParagraphText";

const DiscoverTop = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.discover_top}
        style={styles.image}
        imageStyle={{ borderRadius: 20 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 20,
          }}
        />
        <ParagraphText style={styles.textCont}>
          '1 min classic
          <Text>{"\n\nDesigned based on ACSM \nresearch"}</Text>
        </ParagraphText>
      </ImageBackground>
    </View>
  );
};

export default DiscoverTop;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    height: Dimensions.get("window").height / 4.5,
    width: Dimensions.get("window").width - 8,
    alignSelf: "center",
    borderRadius: 20,
  },
  textCont: {
    position: "absolute",
    bottom: 20,
    left: 15,
  },
});
