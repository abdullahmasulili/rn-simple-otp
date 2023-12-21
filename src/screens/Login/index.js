import { Text } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import GlobalStyles from "~helpers/GlobalStyles";

import Button from "~components/Button";

export default function Login({ navigation, route }) {
  const { username } = route.params || {};

  function handleLogout() {
    navigation.navigate("Register");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={GlobalStyles.h1}>Welcome, {username}!</Text>
      <Button caption="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
}
