import { StyleSheet, View, Button } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import theme from "../config/theme";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username required"),
  password: yup.string().min(6).required("Password required").label("Password"),
});

export default function SignInScreen() {
  const { signIn } = useSignIn();

  const onSubmit = async (values: { username: string; password: string }) => {
    try {
      const { data } = await signIn(values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        setFieldTouched,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <View>
            <AppTextInput
              error={touched.username && !!errors.username}
              onChangeText={handleChange("username")}
              onBlur={() => setFieldTouched("username")}
              value={values.username}
              placeholder="Username"
            />
            <ErrorMessage
              error={errors.username}
              visible={!!(touched.username && errors.username)}
            />
          </View>
          <View>
            <AppTextInput
              error={touched.password && !!errors.password}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              value={values.password}
              placeholder="Password"
            />
            <ErrorMessage
              error={errors.password}
              visible={!!(touched.password && errors.password)}
            />
          </View>
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
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
