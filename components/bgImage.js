import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function BackgroundImage({ children }) {
    return (
        <ImageBackground
            source={require('../img/bg-oats.jpg')} // Replace with your image path
            style={styles.background}
            resizeMode="cover"
        >
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
});
