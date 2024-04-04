import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BOTTOM_TABS, STACK_SCREENS } from "../constants/route-names";
import BottomTabs from "./BottomTabs";
import StackedNavigation from "./StackedNavigation";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { showGetStarted } = useSelector((state) => state.auth);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {showGetStarted ? (
        <Stack.Screen name={STACK_SCREENS} component={StackedNavigation} />
      ) : (
        <Stack.Screen name={BOTTOM_TABS} component={BottomTabs} />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
