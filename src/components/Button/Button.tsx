import React from "react";
import { Button } from "native-base";

const Button = (): JSX.Element => {
  return (
    <Button
      onPress={() => {
        navigation.navigate("SignUpScreen");
      }}
      alignSelf={"center"}
      marginTop={100}
      width={328}
      borderRadius={18}
      bgColor={"#183B50"}
      fontSize={20}
      color={"white"}
      font
      fontWeight={600}
    >
      Login
    </Button>
  );
};

export default Button;
