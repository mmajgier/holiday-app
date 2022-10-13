import { Formik } from "formik";
import { Button, Input, Text, View } from "native-base";
import React from "react";
import LockerGirl from "../../assets/SVG/LockerGirl";
import { UnauthenticatedScreenProps } from "../ScreenTypes";

const LoginScreen = ({ navigation }: UnauthenticatedScreenProps) => {
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
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View marginTop={"10"}>
              <View marginLeft={"10"}>
                <Text fontFamily={"mono"}>Email</Text>
                <Input
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  width={300}
                  variant={"underlined"}
                  borderBottomColor={"gray.100"}
                  placeholder={"Your email id"}
                  marginBottom={"8"}
                  autoCapitalize={"none"}
                />
                <Text fontFamily={"mono"}>Password</Text>
                <Input
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  width={300}
                  variant={"underlined"}
                  placeholder={"Password"}
                  borderBottomColor={"gray.100"}
                  type={"password"}
                  autoCapitalize={"none"}
                />
              </View>
              <Button
                onPress={() => {
                  navigation.navigate("SignUpScreen");
                }}
                bgColor={"nileBlue.100"}
                marginTop={50}
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
          )}
        </Formik>
      </View>
    </>
  );
};

export default LoginScreen;
