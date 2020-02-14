/**
 * @format
 * @flow
 **/

import {Animated, Text, TouchableOpacity} from "react-native";
import animation from "../Character/animation";
import {styles} from "../Character/styles";
import React, {useState, useEffect} from "react";

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);


const Button: ()  => React$Node = ({isSelected, text, style, navigation, item}) => {
    const [animated] = useState(new Animated.Value(0));

    useEffect(()=> {
        animation.onPressAnimation(animated, isSelected ? 1 : 0);
    }, [isSelected]);



    return (
        <AnimatedButton style={[styles.button, animation.getTopStyle(animated), style]}
                        onPress={() => navigation.navigate(text, {locationUrl: item.location.url})}><Text
                        style={styles.buttonText}>{text}</Text>
        </AnimatedButton>

    )
};

export default Button;
