import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function BackgroundImage({ children }) {
    return (
        <ImageBackground
            source={require('../images/bg-oats.jpg')}
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
