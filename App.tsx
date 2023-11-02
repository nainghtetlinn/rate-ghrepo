import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider } from "@apollo/client";

import type { RootStackParamList } from "./src/@types/navigation";

import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";

import RepositoryListScreen from "./src/screen/RepositoryListScreen";
import SignInScreen from "./src/screen/SignInScreen";

const Stack = createStackNavigator<RootStackParamList>();
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
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
        </AuthStorageContext.Provider>
      </ApolloProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
