import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import GameBoard from "./app/screens/GameBoard";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        >
          <WelcomeScreen />
        </Stack.Screen>
        <Stack.Screen name="GameBoard" component={GameBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
