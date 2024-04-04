import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { images } from "../../../../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import HeadingText from "../../../components/texts/HeadingText";
import StatsTopView from "./components/StatsTopView";
import CalenderShow from "./components/CalenderShow";
import PersonStatsContainer from "./components/PersonStatsContainer";

const Statistics = () => {
  return (
    <ImageBackground source={images.stats} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <StatsTopView />

        <CalenderShow />

        <PersonStatsContainer />
      </ScrollView>
    </ImageBackground>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 50,
    gap: 30,
  },
});
