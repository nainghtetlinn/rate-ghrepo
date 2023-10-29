import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import type { TextInputProps } from "react-native";

import theme from "../config/theme";

interface Props extends TextInputProps {
  error?: boolean;
}

export default function AppTextInput({ error, ...otherProps }: Props) {
  return (
    <View style={[styles.container, error && styles.error]}>
      <TextInput {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 5,
    borderWidth: 1,
  },
  error: {
    borderColor: theme.colors.red,
  },
});
