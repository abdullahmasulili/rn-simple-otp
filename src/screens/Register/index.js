import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";

import styles from "./styles";
import GlobalStyles from "~helpers/GlobalStyles";

import Button from "~components/Button";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;

  function handleSubmitPress() {
    const isInputsValid = validateInputs();
    if (!isInputsValid) {
      Toast.show({
        type: "error",
        text1: "Form Invalid",
        text2: errorMsg,
      });
    }

    return navigation.navigate("Otp");
  }

  function validateInputs() {
    if (!username || !email || !phone || !password || !confirmPassword) {
      setErrorMsg("Please fill required inputs");

      return false;
    }

    switch (false) {
      case emailRegex.test(email):
        setErrorMsg("Invalid Email");

        return false;
      case passwordRegex.test(password):
        setErrorMsg(
          "Password must contain an uppercase, an lowercase, a symbol, and at least 8 characters long"
        );

        return false;
      case confirmPassword === password:
        setErrorMsg("Password not match");

        return false;
      case usernameRegex.test(username):
        setErrorMsg("Invalid Username");

        return false;
      default:
        return true;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.main}>
          <Text style={GlobalStyles.h2}>Registration</Text>
          <Text style={GlobalStyles.subtitle}>Please Fill Following Form</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Username"
            inputMode="text"
            value={username}
            onChangeText={(value) => setUsername(value)}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Email"
            inputMode="email"
            keyboardType="email-address"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Phone"
            inputMode="tel"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(value) => setPhone(value)}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Password"
            secureTextEntry
            textContentType="newPassword"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Confirm Password"
            secureTextEntry
            textContentType="newPassword"
            value={confirmPassword}
            onChangeText={(value) => setConfirmPassword(value)}
          />

          <Button caption="Submit" onPress={handleSubmitPress} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
