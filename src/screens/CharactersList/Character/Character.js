/**
 * @format
 * @flow
 **/

import React, {useState, useEffect} from 'react';
import {Animated, Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import animation from './animation';
import Button from '../Button'

const Character: ()  => React$Node = ({item, isSelected, navigation, onSelect}) => {
    const [animated] = useState(new Animated.Value(0));

    useEffect(()=> {
        animation.onPressAnimation(animated, isSelected ? 1 : 0);
    }, [isSelected]);

    return (
        <>
            <TouchableOpacity
                style={[styles.itemWrap, !!isSelected && styles.active]}
                onPress={() => onSelect(item.id)}
                disabled={isSelected}
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
                    <View style={styles.buttonWrap}>
                        <Button text={'Locations'} style={[animation.getTopStyle(animated), styles.left]} navigation={navigation} item={item}/>
                        <Button text={'Episodes'} style={[animation.getTopStyle(animated)]} navigation={navigation} item={item}/>
                    </View>
                </View>
            </TouchableOpacity>
        </>
)
};

// const areEqual = (prevProps, nextProps) => {
//     return prevProps.isSelected === nextProps.isSelected
// };

export default React.memo(Character);
// export default Character;
