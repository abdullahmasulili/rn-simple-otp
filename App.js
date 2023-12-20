import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import MainStack from "~routes";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
