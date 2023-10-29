import type { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  RepoList: undefined;
  SignIn: undefined;
};

export type RepoListType = StackScreenProps<RootStackParamList, "RepoList">;
export type SignInType = StackScreenProps<RootStackParamList, "SignIn">;
