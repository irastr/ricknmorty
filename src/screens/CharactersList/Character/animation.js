import { Animated } from 'react-native';


const animation = {
    getTopStyle(animated) {
        const interpolation = animated.interpolate({
            inputRange: [0, 1],
            outputRange: [60, 0]
        });
        return {
            top: interpolation
        };
    },
    onPressAnimation(animated, value) {
        Animated.timing(animated, {
            toValue: value,
            duration: 400
        })
            .start();
    }
};

export default animation;
