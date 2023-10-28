import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import Screen from "./src/components/Screen";
import AppText from "./src/components/AppText";

export default function App() {
  return (
    <Screen style={styles.container}>
      <AppText>Hello React Native</AppText>
      <StatusBar style="auto" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
