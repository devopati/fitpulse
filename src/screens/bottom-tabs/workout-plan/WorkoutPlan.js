import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import TopView from "./components/TopView";
import PlanTitle from "./components/PlanTitle";
import PlanContainer from "./components/PlanContainer";
import CategoryContainer from "./components/CategoryContainer";
import { images } from "../../../../assets/images";

const WorkoutPlan = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <TopView />

        <PlanTitle />

        <PlanContainer />

        <PlanTitle text1="Workout categories" text2="See all" />

        <View style={styles.categories}>
          <CategoryContainer />
          <CategoryContainer text="Intermiediate" />
          <CategoryContainer text="Advanced" />
        </View>

        <PlanContainer text="Custom Workout" image={images.workout_plan2} />

        <PlanContainer text="Calisthenics" image={images.workout_plan3} />

        <PlanContainer text="Shredded body" image={images.workout_plan4} />

        <PlanContainer text="Lean body" image={images.workout_plan5} />

        <PlanContainer text="Abs" image={images.workout_plan6} />

        <PlanContainer text="Legs" image={images.workout_plan7} />
      </ScrollView>
    </View>
  );
};

export default WorkoutPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
  },
  scrollView: {
    gap: 25,
    paddingBottom: 50,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
});
