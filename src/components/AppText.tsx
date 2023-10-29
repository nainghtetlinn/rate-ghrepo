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
  fontSize?: "subheading" | "body" | "heading";
  fontWeight?: "normal" | "bold";
}) {
  return (
    <Text
      style={[
        styles.text,
        color === "textSecondary" && styles.colorTextSecondary,
        color === "primary" && styles.colorPrimary,
        fontSize === "subheading" && styles.fontSizeSubheading,
        fontSize === "heading" && styles.fontSizeHeading,
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
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});
