import React from "react";
import { ImageBackground, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Round1({ navigation }) {
  return (
    <ImageBackground
      style={styles.gameboard}
      source={require("../assets/11.png")}
    >
      <Button
        title="Tap to Find Out"
        onPress={() => {
          navigation.navigate("Visual2");
        }}
        style={styles.button}
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
export default Round1;
