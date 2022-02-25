import React from "react";
import { ImageBackground, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Visual2({ navigation }) {
  return (
    <ImageBackground
      style={styles.gameboard}
      source={require("../assets/12.png")}
    >
      <Button
        style={styles.button}
        title="Tap to Start"
        onPress={() => {
          navigation.navigate("Imagine");
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "green",
    alignItems: "baseline",
    justifyContent: "center",
  },
  gameboard: {
    flex: 1,
    position: "relative",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
export default Visual2;
