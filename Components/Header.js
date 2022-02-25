import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text>FinGem.io</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#1be2dc",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
