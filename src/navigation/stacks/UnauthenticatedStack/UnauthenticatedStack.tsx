import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../../screens/LoginScreen/LoginScreen";
import SignUpScreen from "../../../screens/SignUpScreen/SignUpScreen";
import { UnauthenticatedStackNavigatorParamList } from "./types";

const Stack =
  createNativeStackNavigator<UnauthenticatedStackNavigatorParamList>();

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedStack;
