import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const result = await mutate({
      variables: {
        credentials: { username, password },
      },
    });
    const { data } = result;
    const token = data?.authenticate?.accessToken || "";
    await authStorage?.setAccessToken(token);
    apolloClient.resetStore();
    return result;
  };

  return { signIn, result };
};

export default useSignIn;
