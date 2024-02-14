import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../Button/Button";
import * as yup from "yup";
import { Formik } from "formik";

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const SignupValidationuser = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email address is required"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number")
      .required("Phone number is required"),
    password: yup
      .string()
      .min(
        8,
        ({ min }) =>
          `Please enter a valid password with at least ${min} characters`
      )
      .required("No password provided."),
  });
  return (
    <Formik
      initialValues={{ email: "", password: "", phoneNumber: "" }}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate("Login");
      }}
      validationSchema={SignupValidationuser}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginVertical: 12,
                  color: COLORS.black,
                }}
              >
                Create Account
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.black,
                }}
              >
                Connect with your friend today!
              </Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}
              >
                Email address
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Enter your email address"
                  placeholderTextColor={COLORS.black}
                  keyboardType="email-address"
                  style={{
                    width: "100%",
                  }}
                />
              </View>
              {errors.email && touched.email && (
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    fontSize: 10,
                    marginTop: 5,
                  }}
                >
                  {errors.email}
                </Text>
              )}
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}
              >
                Mobile Number
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="+91"
                  placeholderTextColor={COLORS.black}
                  keyboardType="numeric"
                  style={{
                    width: "12%",
                    borderRightWidth: 1,
                    borderLeftColor: COLORS.grey,
                    height: "100%",
                  }}
                />

                <TextInput
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  placeholder="Enter your phone number"
                  placeholderTextColor={COLORS.black}
                  keyboardType="numeric"
                  style={{
                    width: "80%",
                  }}
                />
              </View>
              {errors.phoneNumber && touched.phoneNumber && (
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    fontSize: 10,
                    marginTop: 5,
                  }}
                >
                  {errors.phoneNumber}
                </Text>
              )}
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}
              >
                Password
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.black}
                  secureTextEntry={isPasswordShown}
                  style={{
                    width: "100%",
                  }}
                />

                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}
                >
                  {isPasswordShown == true ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                  )}
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && (
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    fontSize: 10,
                    marginTop: 5,
                  }}
                >
                  {errors.password}
                </Text>
              )}
            </View>

            <View
              style={{
                flexDirection: "row",
                marginVertical: 6,
              }}
            >
              <Checkbox
                style={{ marginRight: 8 }}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? COLORS.primary : undefined}
              />

              <Text>I aggree to the terms and conditions</Text>
            </View>

            <Button
              onPress={handleSubmit}
              title="Sign Up"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: COLORS.grey,
                  marginHorizontal: 10,
                }}
              />
              <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: COLORS.grey,
                  marginHorizontal: 10,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderWidth: 1,
                  borderColor: COLORS.grey,
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../assets/facebook.png")}
                  style={{
                    height: 36,
                    width: 36,
                    marginRight: 8,
                  }}
                  resizeMode="contain"
                />

                <Text>Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderWidth: 1,
                  borderColor: COLORS.grey,
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../assets/google.png")}
                  style={{
                    height: 36,
                    width: 36,
                    marginRight: 8,
                  }}
                  resizeMode="contain"
                />

                <Text>Google</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 22,
              }}
            >
              <Text style={{ fontSize: 16, color: COLORS.black }}>
                Already have an account
              </Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.primary,
                    fontWeight: "bold",
                    marginLeft: 6,
                  }}
                >
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default Signup;
