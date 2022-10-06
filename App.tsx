import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bg={"red.100"} marginTop="100" rounded={10} paddingX="100">
        Hello world
      </Box>
    </NativeBaseProvider>
  );
}
