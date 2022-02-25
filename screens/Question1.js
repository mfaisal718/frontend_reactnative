import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

function Question1({ navigation }) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/16.png")}
    >
      <TextInput backgroundColor="Gray"></TextInput>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 80,
    backgroundColor: "#f0f",
  },
  registerButton: {
    width: "100%",
    height: 80,
    textAlign: "center",
    padding: 10,
  },
  logo: {
    width: 200,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  motto: {
    fontWeight: "400",
  },
});

export default Question1;
