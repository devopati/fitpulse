import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BOTTOM_TABS, STACK_SCREENS } from "../constants/route-names";
import BottomTabs from "./BottomTabs";
import StackedNavigation from "./StackedNavigation";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={BOTTOM_TABS} component={BottomTabs} />
      <Stack.Screen name={STACK_SCREENS} component={StackedNavigation} />
    </Stack.Navigator>
  );
};

export default MainStack;
