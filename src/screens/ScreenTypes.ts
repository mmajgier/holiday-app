import { UnauthenticatedStackNavigatorParamList } from "./../navigation/stacks/UnauthenticatedStack/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type UnauthenticatedScreenProps = NativeStackScreenProps<
  UnauthenticatedStackNavigatorParamList,
  "SignUpScreen",
  "LoginScreen"
>;
