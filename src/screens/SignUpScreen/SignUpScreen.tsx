import { Formik } from "formik";
import { Button, Input, ScrollView, Text, View } from "native-base";
import React from "react";
import LockerGirl from "../../assets/SVG/LockerGirl";
import { LoginScreenProps } from "./types";

const SignUpScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <ScrollView>
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
      <View
        bgColor={"white"}
        height={"full"}
        borderRadius={"18"}
        marginTop={20}
      >
        <Text
          marginTop={30}
          marginLeft={22}
          fontSize={32}
          fontFamily={"heading"}
        >
          Sign-up
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View marginTop={"10"} alignItems={"center"}>
              <View width={"3/4"}>
                <Text fontFamily={"mono"}>Name</Text>
                <Input
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.email}
                  width={300}
                  variant={"underlined"}
                  borderBottomColor={"gray.100"}
                  placeholder={"Your name"}
                  marginBottom={"8"}
                  autoCapitalize={"none"}
                />
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
                <Text fontFamily={"mono"}>Contact no.</Text>
                <Input
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  width={300}
                  variant={"underlined"}
                  borderBottomColor={"gray.100"}
                  placeholder={"Your contact number"}
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
                <Text
                  alignSelf={"flex-end"}
                  color={"gray.100"}
                  fontFamily={"mono"}
                  marginTop={"5px"}
                  onPress={() => {
                    navigation.navigate("PasswordResetScreen");
                  }}
                >
                  Forgot password?
                </Text>
              </View>
              <Button
                onPress={() => {
                  navigation.navigate("SignUpScreen");
                }}
                bgColor={"nileBlue.100"}
                marginTop={"20px"}
              >
                <Text
                  fontFamily={"body"}
                  color={"white"}
                  fontSize={"20px"}
                  lineHeight={"24px"}
                  textAlign={"center"}
                >
                  Sign-up
                </Text>
              </Button>
              <Text
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
                fontFamily={"mono"}
                marginY={"20px"}
              >
                Back to login
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
