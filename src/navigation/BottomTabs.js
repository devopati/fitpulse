import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DISCOVER_SCREEN,
  PROFILE_SCREEN,
  STATISTICS_SCREEN,
  WORKOUT_PLAN_SCREEN,
} from "../constants/route-names";
import {
  Discover,
  Profile,
  Statistics,
  WorkoutPlan,
} from "../screens/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={WORKOUT_PLAN_SCREEN} component={WorkoutPlan} />
      <Tab.Screen name={DISCOVER_SCREEN} component={Discover} />
      <Tab.Screen name={STATISTICS_SCREEN} component={Statistics} />
      <Tab.Screen name={PROFILE_SCREEN} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
