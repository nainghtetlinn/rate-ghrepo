import { useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/queries";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    return mutate({
      variables: {
        credentials: { username, password },
      },
    });
  };

  return { signIn, result };
};

export default useSignIn;
