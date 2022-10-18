import { Formik } from "formik";
import { Button, Input, ScrollView, Text, View } from "native-base";
import React from "react";
import LockerGirl from "../../assets/SVG/LockerGirl";
import { UnauthenticatedScreenProps } from "../LoginScreen/types";

const PasswordResetScreen = ({ navigation }: UnauthenticatedScreenProps) => {
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
          Forgot password
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View marginTop={"10"} alignItems={"center"}>
              <View width={"3/4"}>
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
                  Submit
                </Text>
              </Button>
              <Text
                alignSelf={"center"}
                color={"black"}
                fontFamily={"mono"}
                marginTop={"15px"}
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
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

export default PasswordResetScreen;
