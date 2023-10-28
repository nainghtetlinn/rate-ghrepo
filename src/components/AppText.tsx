import { StyleSheet, Text } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import React from "react";

import theme from "../config/theme";

export default function AppText({
  children,
  style,
  color,
  fontSize,
  fontWeight,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  color?: "primary" | "textSecondary" | "textPrimary";
  fontSize?: "subheading" | "body";
  fontWeight?: "normal" | "bold";
}) {
  return (
    <Text
      style={[
        styles.text,
        color === "textSecondary" && styles.colorTextSecondary,
        color === "primary" && styles.colorPrimary,
        fontSize === "subheading" && styles.fontSizeSubheading,
        fontWeight === "bold" && styles.fontWeightBold,
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});
