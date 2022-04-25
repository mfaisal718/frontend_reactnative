import { useState } from "react";
import React from "react";
import { ImageBackground, StyleSheet, View, TextInput } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function Question1({ navigation }) {
  const [enteredAnswer, setEnteredAnswer] = useState("");

  function textInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function setInputHandler() {
    setEnteredText("");
  }

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/16.png")}
    >
      <View>
        <TextInput
          style={styles.answerInput}
          value={enteredAnswer}
          onChangeText={textInputHandler}
        ></TextInput>
        <PrimaryButton onPress={setInputHandler}>Submit</PrimaryButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  answerInput: {
    flex: 1,
    height: 50,
    fontSize: 32,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    color: "black",
    marginVertical: 8,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Question1;
