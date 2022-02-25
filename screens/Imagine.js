import * as React from "react";
import { View, StyleSheet, Button, ImageBackground } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

export default function Imagine({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ImageBackground
      style={styles.gameboard}
      source={require("../assets/14.png")}
    >
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://fast.wistia.com/embed/medias/a9d5gft6oo.jsonp",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View>
        <Button
          title="Next"
          onPress={() => {
            navigation.navigate("Question1");
          }}
          style={styles.button}
        />
      </View>
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
    alignItems: "baseline",
    justifyContent: "center",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
