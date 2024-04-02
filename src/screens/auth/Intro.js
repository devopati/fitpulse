import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { containerStyle } from "../../custom/custom-styles";
import HeadingText from "../../components/texts/HeadingText";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../assets/images";
import IntroBtn from "./components/IntroBtn";
import Seperator from "./components/Seperator";

const Intro = () => {
  return (
    <ImageBackground source={images.intro} style={styles.container}>
      <SafeAreaView
        style={[
          {
            flex: 1,
            paddingTop: 55,
            backgroundColor: "rgba(56, 87, 255, 0.14)",
          },
          containerStyle,
        ]}
      >
        <View>
          <HeadingText textStyle={styles.title}>FITPULSE</HeadingText>
        </View>

        <View style={styles.bottomView}>
          <View>
            <HeadingText textStyle={styles.text}>
              YOUR ULTIMATE FITNESS COMPANION
            </HeadingText>

            <Seperator />
          </View>

          <IntroBtn />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 38,
    fontFamily: "orbitronBold",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
  },
  bottomView: {
    position: "absolute",
    alignSelf: "center",
    bottom: 50,
    gap: 200,
  },
});
