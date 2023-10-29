import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import type { TextInputProps } from "react-native";

import theme from "../config/theme";

export default function AppTextInput(props: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 5,
    borderWidth: 1,
  },
});
