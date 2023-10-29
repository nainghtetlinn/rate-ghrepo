import { StyleSheet } from "react-native";
import React from "react";

import AppText from "./AppText";
import theme from "../config/theme";

export default function ErrorMessage({
  error,
  visible,
}: {
  error?: string;
  visible?: boolean;
}) {
  if (!visible) return null;
  // @ts-ignore
  return <AppText style={styles.text}>{error}</AppText>;
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.red,
  },
});
