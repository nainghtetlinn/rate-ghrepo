import { useQuery } from "@apollo/client";
import type { repoType } from "../@types/repository";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const repositories = data?.repositories?.edges.map(
    (e: any) => e.node
  ) as repoType[];

  return { repositories, loading, refetch };
};

export default useRepositories;
