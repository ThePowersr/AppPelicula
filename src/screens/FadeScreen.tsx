/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';

const FadeScreen = () => {

    const { fadeIn, opacity, fadeOut } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Animated.View style={{
                backgroundColor: 'red',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity: opacity,
                marginBottom: 5
            }} />
            <Button
                title="FadeIn"
                onPress={fadeIn}
            />
            <Button
                title="FadeOut"
                onPress={fadeOut}
            />
        </View>

    );
};

export default FadeScreen;
