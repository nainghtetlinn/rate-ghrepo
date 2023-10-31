import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider } from "@apollo/client";

import type { RootStackParamList } from "./src/@types/navigation";

import createApolloClient from "./src/utils/apolloClient";

import RepositoryListScreen from "./src/screen/RepositoryListScreen";
import SignInScreen from "./src/screen/SignInScreen";

const Stack = createStackNavigator<RootStackParamList>();
const apolloClient = createApolloClient();

export default function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="RepoList"
              component={RepositoryListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SignIn" component={SignInScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
