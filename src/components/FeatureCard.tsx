import { StyleSheet, View } from "react-native";
import React from "react";

import AppText from "./AppText";

export default function FeatureCard({
  title,
  subtitle,
}: {
  title: string | number;
  subtitle: string;
}) {
  return (
    <View style={styles.container}>
      <AppText fontWeight="bold">{title}</AppText>
      <AppText color="textSecondary">{subtitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 5,
  },
});
