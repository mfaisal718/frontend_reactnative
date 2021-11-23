import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View , Button} from 'react-native';

import Colors from '../constants/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground resizeMode="center" style={styles.background}
        source={require("../assets/main_screen.png")}><View style={styles.logoContainer}><Image style= {styles.logo}source={require('../assets/fingem_logo.png')}/><Text style= {styles.motto}>Empowering Our Communities Through Financial Literacy</Text></View><Button
        title="GameBoard"
        onPress={() =>
          navigation.navigate('GameBoard', { name: 'GameBoard' })
        } colors={Colors.primary}
      /><View style= {styles.loginButton}></View><View style= {styles.registerButton}></View></ImageBackground>
            
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 80,
        backgroundColor: "#f0f",
    },
    registerButton: {
        width: "100%",
        height: 80,
        textAlign: "center",
        padding: 10,
    },
    logo: {
        width: 200,
        height: 100,
        
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
        
    },
    motto: {
        fontWeight: "400",
    }

    
})

export default WelcomeScreen;