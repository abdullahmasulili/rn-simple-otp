import { View, Text } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import GlobalStyles from "~helpers/GlobalStyles";
import styles from "./styles";
import OtpInput from "~components/OtpInput";

export default function Otp({ navigation, route }) {
  const { phone } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={GlobalStyles.h1}>Enter the One-Time Password</Text>
        <Text style={[GlobalStyles.subtitle, { textAlign: "center" }]}>
          Enter the 6-digits that we've sent via phone number to {phone}
        </Text>
      </View>
      <OtpInput />
    </SafeAreaView>
  );
}
