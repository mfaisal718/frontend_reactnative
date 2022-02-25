import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      resizeMode="center"
      style={styles.background}
      source={require("../assets/main_screen.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/fingem_logotransparent.png")}
        />
        <Text style={styles.motto}>
          Empowering Communities Through Financial Literacy
        </Text>
      </View>
      <TouchableOpacity
        title="LOGIN"
        style={styles.loginButton}
        onPress={() => navigation.navigate("GameBoard")}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="REGISTER"
        style={styles.loginButton}
        onPress={() => navigation.navigate("GameBoard")}
      >
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="LIBRARY"
        style={styles.library}
        onPress={() => navigation.navigate("GameBoard")}
      >
        <Text style={styles.buttonText}>LIBRARY</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  car: {
    position: "absolute",
    width: 100,
    height: 50,
  },
  background: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: 140,
    height: 53,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#1be2dc",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  logo: {
    width: 240,
    height: 100,
    padding: 50,
  },
  logoContainer: {
    position: "absolute",
    top: 10,
    alignItems: "center",
  },
  motto: {
    fontWeight: "bold",
    paddingTop: 50,
  },
  library: {
    marginBottom: 10,
    width: 140,
    height: 53,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#1be2dc",
  },
});

export default WelcomeScreen;
