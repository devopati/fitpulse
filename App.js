import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { enableFreeze } from "react-native-screens";
import * as Splashscreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import RootNavigation from "./src/navigation/RootNavigation";
import { useCallback } from "react";
import { View } from "react-native";

enableFreeze(true);

Splashscreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    orbitronLight: require("./assets/fonts/Orbitron-Black.ttf"),
    orbitronRegular: require("./assets/fonts/Orbitron-Regular.ttf"),
    orbitronMedium: require("./assets/fonts/Orbitron-Medium.ttf"),
    orbitronSemiBold: require("./assets/fonts/Orbitron-SemiBold.ttf"),
    orbitronBold: require("./assets/fonts/Orbitron-Bold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={handleOnLayout} style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <StatusBar style="auto" />
          <RootNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </View>
  );
}
