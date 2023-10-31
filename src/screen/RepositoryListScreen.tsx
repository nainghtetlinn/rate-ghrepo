import { StyleSheet, FlatList, Text } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";

import Screen from "../components/Screen";
import AppBar from "../components/AppBar";
import Separator from "../components/Separator";
import RepositoryItem from "../components/RepositoryItem";
import theme from "../config/theme";

import { GET_REPOSITORIES } from "../graphql/queries";
import { repoType } from "../@types/repository";

export default function RepositoryListScreen() {
  const { data, loading } = useQuery(GET_REPOSITORIES);

  const repositories = data?.repositories?.edges;

  return (
    <Screen style={styles.container}>
      <AppBar />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={repositories}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => <RepositoryItem item={item.node} />}
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
