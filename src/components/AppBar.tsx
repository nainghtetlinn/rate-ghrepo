import { StyleSheet, View, Button, ScrollView } from "react-native";
import React from "react";
import { useQuery, useApolloClient } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import type { SignInType } from "../@types/navigation";

import theme from "../config/theme";
import AppText from "./AppText";
import { GET_ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";

export default function AppBar() {
  const navigation = useNavigation<SignInType["navigation"]>();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { data } = useQuery(GET_ME);

  const signOut = async () => {
    await authStorage?.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <AppText style={styles.text} fontWeight="bold" fontSize="heading">
        Respositories
      </AppText>
      <View style={styles.buttonsContainer}>
        <ScrollView horizontal>
          {data?.me?.id ? (
            <Button title="Sign Out" onPress={signOut} />
          ) : (
            <Button
              title="Sign In"
              onPress={() => navigation.navigate("SignIn")}
            />
          )}
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
