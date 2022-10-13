import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UnauthenticatedStack from "../UnauthenticatedStack/UnauthenticatedStack";

const RootStack = () => {
  return (
    <NavigationContainer>
      <UnauthenticatedStack />
    </NavigationContainer>
  );
};

export default RootStack;
