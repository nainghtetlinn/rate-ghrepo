import { useState, useEffect } from "react";
import type { repoType } from "../@types/repository";

const useRepositories = () => {
  const [repositories, setRepositories] = useState<repoType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch("http://192.168.1.8:5000/api/repositories");
    const json = await response.json();
    const repositoryNodes = json
      ? json.edges.map((edge: any) => edge.node)
      : [];
    setLoading(false);
    setRepositories(repositoryNodes);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
