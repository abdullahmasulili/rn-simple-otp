import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./styles";

export default function Button({ onPress, caption }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.primary}
      activeOpacity={0.8}
    >
      <Text style={styles.caption}>{caption}</Text>
    </TouchableOpacity>
  );
}
