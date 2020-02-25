/**
 * @format
 * @flow
 **/

import React, {useState} from 'react';
import {Animated, Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";


const Character: ()  => React$Node = ({item, isSelected, navigation, onSelect, value, isScrolling}) => {
    const [animated] = useState(new Animated.Value(0));

    // useEffect(()=> {
    //     animation.onPressAnimation(animated, isSelected ? 1 : 0);
    // }, [isSelected]);

    const getScaleStyle = () => {
        const interpolation = animated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.98]
        });
        return {
            transform: [
                { scale: interpolation }
            ]
        };
    };

    const pressAnimation = (animated, value, callback = () => {}) => {
        Animated.timing(animated, {
            toValue: value,
            duration: 200,
            useNativeDriver: true
        }).start(() => {
            callback();
        });
    };

    // console.log(isScrolling, 'isScrolling');

    return (
        <>
            <TouchableOpacity
                style={[styles.itemWrap, getScaleStyle()]}
                onPress={() => navigation.navigate('Details', {item})}
                activeOpacity={1}
                onPressIn={() => pressAnimation(animated, 1)}
                onPressOut={() => pressAnimation(animated, 0)}
            >
                <Image source={{uri: item.image}} style={styles.img}/>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>
                        {item.name}
                    </Text>
                    <Text style={styles.subTitle}>
                        {`Location: ${item.location.name}`}
                    </Text>
                    <Text style={styles.subTitle}>
                        {`Species: ${item.species}`}
                    </Text>
                    {/*<View style={styles.buttonWrap}>*/}
                    {/*    <Button text={'Locations'} style={[animation.getTopStyle(animated), styles.left]} navigation={navigation} item={item}/>*/}
                    {/*    <Button text={'Episodes'} style={[animation.getTopStyle(animated)]} navigation={navigation} item={item}/>*/}
                    {/*</View>*/}
                </View>
            </TouchableOpacity>
        </>
)
};

// const areEqual = (prevProps, nextProps) => {
//     return prevProps.isSelected === nextProps.isSelected
// };

// export default React.memo(Character);
export default Character;
