import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "../screens/WelcomeScreen.js";
import GameBoard from "../screens/GameBoard.js";
import Question1 from "../screens/Question1.js";
import Question2 from "../screens/Question2.js";
import Video1 from "../screens/Video1.js";
import Colors from "../constants/colors.js";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const AnswersNavigator = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen,
    GameBoard: GameBoard,
    Question1: Question1,
    Question2: Question2,
    Video1: Video1,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

export default createAppContainer(ShopNavigator);
