import { StyleSheet, View, Button } from "react-native";
import React from "react";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import theme from "../config/theme";

export default function SignInScreen() {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={{ username: "", password: "" }} onSubmit={onSubmit}>
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>
          <AppTextInput
            onChangeText={handleChange("username")}
            value={values.username}
            placeholder="Username"
          />
          <AppTextInput
            onChangeText={handleChange("password")}
            value={values.password}
            placeholder="Password"
          />
          <Button title="Submit" onPress={() => handleSubmit()} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    backgroundColor: theme.colors.white,
  },
});
