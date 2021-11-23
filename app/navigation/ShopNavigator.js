import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from "react-navigation";
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

const ProductsNavigator = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen,
    GameBoard: GameBoardScreen,
    Question1: Question1Screen,
    Question2: Question2Screen,
    Video1: Video1Screen,
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
