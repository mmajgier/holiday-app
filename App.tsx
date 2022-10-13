import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "./src/navigation/stacks/RootStack/RootStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <RootStack />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
