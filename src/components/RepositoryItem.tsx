import { StyleSheet, View, Image } from "react-native";
import React from "react";
import type { repoType } from "../@types/repository";

import numeral from "numeral";

import theme from "../config/theme";
import AppText from "./AppText";
import FeatureCard from "./FeatureCard";

export default function RepositoryItem({ item }: { item: repoType }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />

        <View style={styles.detailsContainer}>
          <AppText fontWeight="bold">{item.fullName}</AppText>
          <AppText color="textSecondary">{item.description}</AppText>
          <View style={styles.tagContainer}>
            {/* @ts-ignore */}
            <AppText style={styles.tag}>{item.language}</AppText>
          </View>
        </View>
      </View>
      <View style={styles.featureCardContainer}>
        <FeatureCard
          title={numeral(item.stargazersCount).format("0a")}
          subtitle="Stars"
        />
        <FeatureCard
          title={numeral(item.forksCount).format("0a")}
          subtitle="Forks"
        />
        <FeatureCard title={item.reviewCount} subtitle="Reviews" />
        <FeatureCard title={item.ratingAverage} subtitle="Rating" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white, padding: 15 },
  itemContainer: { flexDirection: "row", gap: 20 },
  image: { width: 40, height: 40, borderRadius: 4, overflow: "hidden" },
  detailsContainer: { alignItems: "flex-start", gap: 5, flex: 1 },
  tagContainer: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  tag: {
    color: theme.colors.white,
  },
  featureCardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
