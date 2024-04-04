import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../../../../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import AgeInput from "./components/AgeInput";
import ParagraphText from "../../../components/texts/ParagraphText";
import HeadingText from "../../../components/texts/HeadingText";
import UserInfoBtnView from "./components/UserInfoBtnView";
import { useDispatch } from "react-redux";
import { setGetStarted } from "../../../redux/slices/authSlice";

const Weight = ({ pagerRef, weight, setWeight, setErr }) => {
  const dispatch = useDispatch();
  return (
    <ImageBackground source={images.weight} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ gap: 30 }}>
          <HeadingText textStyle={styles.title}>
            What is your weight
          </HeadingText>

          <ParagraphText textStyle={{ textAlign: "center" }}>
            {"This helps us create your \npersonalised plan"}
          </ParagraphText>
        </View>

        <Text></Text>

        <AgeInput
          input="Weight"
          value={weight}
          onChangeText={(weight) => setWeight(weight)}
        />

        <View style={styles.bottomView}>
          <UserInfoBtnView
            onBackPress={() => pagerRef.current.setPage(1)}
            onFwPress={() => {
              if (!weight)
                return setErr({
                  errTitle: "Weight missing",
                  errText:
                    "Enter your weight to continue and complete the process",
                });
              dispatch(setGetStarted(false));
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Weight;

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
