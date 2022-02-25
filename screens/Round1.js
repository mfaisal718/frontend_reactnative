import React from "react";
import { ImageBackground, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Round1({ navigation }) {
  return (
    <ImageBackground
      style={styles.gameboard}
      source={require("../assets/10.png")}
    >
      <Button
        title="Tap to Start"
        onPress={() => {
          navigation.navigate("Visual1");
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
    width: "100%",
    height: "100%",
  },
  button: {
    color: "green",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
export default Round1;
