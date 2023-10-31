import { StyleSheet, FlatList, Text } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import AppBar from "../components/AppBar";
import Separator from "../components/Separator";
import RepositoryItem from "../components/RepositoryItem";
import theme from "../config/theme";
import useRepositories from "../hooks/useRepositiories";

export default function RepositoryListScreen() {
  const { repositories, loading } = useRepositories();

  return (
    <Screen style={styles.container}>
      <AppBar />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={repositories}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => <RepositoryItem item={item} />}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgPrimary,
  },
});
