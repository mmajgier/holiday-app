import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../../screens/LoginScreen/LoginScreen";
import PasswordResetScreen from "../../../screens/PasswordResetScreen/PasswordResetScreen";
import SignUpScreen from "../../../screens/SignUpScreen/SignUpScreen";
import { UnauthenticatedStackNavigatorParamList } from "./types";

const Stack =
  createNativeStackNavigator<UnauthenticatedStackNavigatorParamList>();

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="PasswordResetScreen"
        component={PasswordResetScreen}
      />
    </Stack.Navigator>
  );
};

export default UnauthenticatedStack;
