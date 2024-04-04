import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
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
import { CustomColors } from "../custom/custom-colors";
import IconImage from "../screens/bottom-tabs/components/IconImage";
import { icons } from "../../assets/icons";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color, focused }) => {
          if (route.name === WORKOUT_PLAN_SCREEN) {
            return <IconImage focused={focused} />;
          }
          if (route.name === DISCOVER_SCREEN) {
            return <IconImage focused={focused} icon={icons.discover} />;
          }
          if (route.name === STATISTICS_SCREEN) {
            return <IconImage focused={focused} icon={icons.stats} />;
          }
          if (route.name === PROFILE_SCREEN) {
            return <IconImage focused={focused} icon={icons.profile} />;
          }
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: CustomColors.greyVariant,
          height: 63,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      })}
    >
      <Tab.Screen name={WORKOUT_PLAN_SCREEN} component={WorkoutPlan} />
      <Tab.Screen name={DISCOVER_SCREEN} component={Discover} />
      <Tab.Screen name={STATISTICS_SCREEN} component={Statistics} />
      <Tab.Screen name={PROFILE_SCREEN} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
