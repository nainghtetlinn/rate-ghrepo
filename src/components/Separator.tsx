import { StyleSheet, View } from "react-native";
import React from "react";

export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
