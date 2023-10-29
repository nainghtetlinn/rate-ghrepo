import { StyleSheet, View, Button, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import type { SignInType } from "../@types/navigation";

import theme from "../config/theme";
import AppText from "./AppText";

export default function AppBar() {
  const navigation = useNavigation<SignInType["navigation"]>();
  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <AppText style={styles.text} fontWeight="bold" fontSize="heading">
        Respositories
      </AppText>
      <View style={styles.buttonsContainer}>
        <ScrollView horizontal>
          <Button
            title="Sign In"
            onPress={() => navigation.navigate("SignIn")}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgSecondary,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  text: {
    color: theme.colors.white,
  },
  buttonsContainer: { flex: 1 },
});
