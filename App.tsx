import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "./src/navigation/stacks/RootStack/RootStack";
import nativeBaseTheme from "./src/utils/nativeBaseTheme";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Serif-Italic": require("./src/assets/fonts/DMSerifText-Italic.ttf"),
    "Serif-Regular": require("./src/assets/fonts/DMSerifText-Regular.ttf"),
    "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <RootStack />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
