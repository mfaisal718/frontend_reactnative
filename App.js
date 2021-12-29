// In App.js in a new project

import * as React from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Button,
  View,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      resizeMode="center"
      style={styles.background}
      source={require("./app/assets/main_screen.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./app/assets/fingem_logotransparent.png")}
        />
        <Text
          style={styles.motto}
          source={require("./app/assets/Permanent_Marker/PermanentMarker-Regular.ttf")}
        >
          Empowering Communities Through Financial Literacy
        </Text>
      </View>
      <Button
        title="LOGIN"
        style={styles.loginButton}
        onPress={() => navigation.navigate("GameBoard")}
      ></Button>
    </ImageBackground>
  );
}
function GameBoard({ navigation }) {
  return (
    <ImageBackground
      style={styles.gameboard}
      source={require("./app/assets/gameboard.png")}
    >
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Details")}
      />
    </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "FinGem.io" }}
        />
        <Stack.Screen
          name="GameBoard"
          component={GameBoard}
          options={{ title: "FinGem.io" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  gameboard: {
    flex: 1,
    position: "relative",
    resizeMode: "cover",
  },
  car: {
    position: "absolute",
    width: 100,
    height: 50,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
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
});
export default App;
