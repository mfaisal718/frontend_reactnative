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
import { TouchableOpacity } from "react-native-gesture-handler";

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
        style={styles.loginButton}
        onPress={() => navigation.navigate("GameBoard")}
      >
        <Text style={styles.buttonText}>LIBRARY</Text>
      </TouchableOpacity>
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
          options={{
            title: "FinGem.io",
            headerStyle: {
              backgroundColor: "#1be2dc",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="GameBoard"
          component={GameBoard}
          options={{
            title: "FinGem.io",
            headerStyle: {
              backgroundColor: "#1be2dc",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
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
});
export default App;
