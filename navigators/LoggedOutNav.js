import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreateAccount from "../screens/CreateAccount";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
