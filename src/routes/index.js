import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login, Otp, Register } from "~screens";

const Stack = createNativeStackNavigator();

export default function index() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName="Register"
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
