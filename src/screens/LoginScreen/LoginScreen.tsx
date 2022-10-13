import { Button } from "native-base";
import React from "react";
import { View } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <Button
        colorScheme="primary"
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
        width={100}
        alignSelf={"center"}
        marginTop={100}
      >
        Navigation test button
      </Button>
    </>
  );
};

export default LoginScreen;
