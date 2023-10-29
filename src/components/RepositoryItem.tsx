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
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <AppText fontWeight="bold">{item.fullName}</AppText>
          <AppText color="textSecondary">{item.description}</AppText>
          <View style={styles.tagContainer}>
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
  container: { padding: 20, backgroundColor: theme.colors.white },
  itemContainer: { flexDirection: "row" },
  imageContainer: { marginRight: 20 },
  image: { width: 40, height: 40, borderRadius: 4, overflow: "hidden" },
  detailsContainer: { gap: 5 },
  tagContainer: { flexWrap: "wrap" },
  tag: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: 10,
    borderRadius: 4,
  },
  featureCardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
