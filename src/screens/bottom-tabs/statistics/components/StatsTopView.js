import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadingText from "../../../../components/texts/HeadingText";
import TopViewItem from "./TopViewItem";
import PlanTitle from "../../workout-plan/components/PlanTitle";

const StatsTopView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeadingText>STATISTICS</HeadingText>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TopViewItem />
        <TopViewItem text1="MINUTE" text2="22" />
      </View>

      <View style={{ paddingVertical: 10 }}>
        <PlanTitle text1="History" text2="All records" />
      </View>
    </SafeAreaView>
  );
};

export default StatsTopView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 20,
    gap: 20,
    paddingVertical: 10,
  },
});
