import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import type { RootStackParamList } from "./src/@types/navigation";

import RepositoryListScreen from "./src/screen/RepositoryListScreen";
import SignInScreen from "./src/screen/SignInScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
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
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
