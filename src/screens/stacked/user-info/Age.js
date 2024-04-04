import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../../../../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadingText from "../../../components/texts/HeadingText";
import ParagraphText from "../../../components/texts/ParagraphText";
import AgeInput from "./components/AgeInput";
import UserInfoBtnView from "./components/UserInfoBtnView";

const Age = ({ pagerRef, age, setAge, setErr }) => {
  return (
    <ImageBackground source={images.age} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ gap: 30 }}>
          <HeadingText textStyle={styles.title}>How Old Are You</HeadingText>

          <ParagraphText textStyle={{ textAlign: "center" }}>
            You can always change it later
          </ParagraphText>
        </View>

        <Text></Text>

        <AgeInput value={age} onChangeText={(age) => setAge(age)} />

        <View style={styles.bottomView}>
          <UserInfoBtnView
            onBackPress={() => {
              pagerRef.current.setPage(0);
            }}
            onFwPress={() => {
              if (!age)
                return setErr({
                  errTitle: "Age missing",
                  errText: "Enter your age to continue with the process",
                });
              pagerRef.current.setPage(2);
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Age;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 60,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "orbitronBold",
  },
  bottomView: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingBottom: 20,
  },
});
