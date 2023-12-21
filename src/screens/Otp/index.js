import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import CountDownTimer from "react-native-countdown-timer-hooks";

import GlobalStyles from "~helpers/GlobalStyles";
import styles from "./styles";
import OtpInput from "~components/OtpInput";

import Button from "~components/Button";

export default function Otp({ navigation, route }) {
  const { phone, username } = route.params || {};

  const refTimer = useRef();

  const [timerEnd, setTimerEnd] = useState(false);

  useEffect(() => {
    setTimerEnd(false);
    refTimer.current.resetTimer();
  }, []);

  function timerEndCallback(timerFlag) {
    setTimerEnd(timerFlag);
  }

  function handleResendCode() {
    setTimerEnd(false);
    refTimer.current.resetTimer();
  }

  function handleOtpFilled() {
    navigation.navigate("Login", { username });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={GlobalStyles.h1}>Enter the One-Time Password</Text>
        <Text style={[GlobalStyles.subtitle, { textAlign: "center" }]}>
          Enter the 6-digits that we've sent via phone number to {phone}
        </Text>
      </View>
      <OtpInput onFilled={handleOtpFilled} />
      <View style={styles.footer}>
        <CountDownTimer
          ref={refTimer}
          timestamp={30}
          timerCallback={timerEndCallback}
          containerStyle={{
            display: timerEnd ? "none" : "flex",
          }}
          textStyle={{
            fontSize: 15,
            color: "#555",
            fontWeight: "500",
            letterSpacing: 0.25,
          }}
        />
        <Button
          caption="Resend Code"
          onPress={handleResendCode}
          style={{ display: timerEnd ? "flex" : "none" }}
        />
      </View>
    </SafeAreaView>
  );
}
