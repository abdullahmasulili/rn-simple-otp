import { View, Text, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import styles from "./styles";

export default function OtpInput({ onFilled }) {
  const DIGIT_AMOUNT = 6;
  const inputsRef = useRef(
    Array(DIGIT_AMOUNT)
      .fill(null)
      .map(() => React.createRef())
  );

  const [inputValue, setInputValue] = useState(Array(DIGIT_AMOUNT).fill(""));
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    if (inputValue[DIGIT_AMOUNT - 1] === "") {
      return;
    }

    onFilled();
  }, [inputValue]);

  function handleTextChanged(index, text) {
    const nextIndex = index + 1;
    const hasNextInput = nextIndex < DIGIT_AMOUNT;

    if (hasNextInput && text.length === 1) {
      inputsRef.current[nextIndex].current.focus();
    }

    const newValue = [...inputValue];
    newValue[index] = text;

    setInputValue(newValue);
  }

  function handleOnFocus(inputIndex) {
    setFocusedInput(inputIndex);
  }

  function handleOnBlur() {
    setFocusedInput(null);
  }

  return (
    <View style={styles.container}>
      {inputsRef.current.map((ref, index) => (
        <TextInput
          key={index}
          ref={ref}
          inputMode="numeric"
          keyboardType="number-pad"
          style={[
            styles.inputField,
            focusedInput === index && styles.activeInput,
          ]}
          onChangeText={(text) => handleTextChanged(index, text)}
          onFocus={() => handleOnFocus(index)}
          onBlur={handleOnBlur}
        />
      ))}
    </View>
  );
}
