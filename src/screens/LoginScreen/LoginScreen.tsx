import { Button, Text, View } from "native-base";
import React from "react";
import LockerGirl from "../../assets/SVG/LockerGirl";

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <View
        bgColor={"seaShell.100"}
        width={"full"}
        height={280}
        paddingLeft={60}
        paddingTop={50}
        zIndex={1}
      >
        <LockerGirl />
      </View>
      <View bgColor={"white"} height={"1/2"} borderRadius={"18"} marginTop={20}>
        <Text
          marginTop={30}
          marginLeft={22}
          fontSize={32}
          fontFamily={"heading"}
        >
          Log-in
        </Text>
        <Button
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
          bgColor={"nileBlue.100"}
          position={"relative"}
          marginTop={"1/2"}
        >
          <Text
            fontFamily={"body"}
            color={"white"}
            fontSize={"20px"}
            lineHeight={"24px"}
            textAlign={"center"}
          >
            Login
          </Text>
        </Button>
      </View>
    </>
  );
};

export default LoginScreen;
