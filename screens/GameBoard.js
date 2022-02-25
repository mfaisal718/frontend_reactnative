import React from "react";
import { ImageBackground, StyleSheet, Button } from "react-native";

function GameBoard({ navigation }) {
  return (
    <ImageBackground
      style={styles.gameboard}
      source={require("../assets/9.png")}
    >
      <Button
        title="1"
        onPress={() => {
          navigation.navigate("Round1");
        }}
        style={styles.button}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gameboard: {
    flex: 1,
    position: "relative",
    resizeMode: "cover",
  },
  button: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default GameBoard;
