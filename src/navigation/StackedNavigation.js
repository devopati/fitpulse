import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { USER_INFO_SCREEN } from "../constants/route-names";
import { UserInfo } from "../screens/stacked";

const Stack = createNativeStackNavigator();

const StackedNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={USER_INFO_SCREEN} component={UserInfo} />
    </Stack.Navigator>
  );
};

export default StackedNavigation;
