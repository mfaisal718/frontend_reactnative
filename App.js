import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import GameBoard from "./screens/GameBoard";
import Round1 from "./screens/Round1";
import Visual1 from "./screens/Visual1";
import Visual2 from "./screens/Visual2";
import Imagine from "./screens/Imagine";
import Question1 from "./screens/Question1";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#1be2dc" },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="GameBoard" component={GameBoard} />
        <Stack.Screen name="Round1" component={Round1} />
        <Stack.Screen name="Visual1" component={Visual1} />
        <Stack.Screen name="Visual2" component={Visual2} />
        <Stack.Screen name="Imagine" component={Imagine} />
        <Stack.Screen name="Question1" component={Question1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
