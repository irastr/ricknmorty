/**
 * @format
 * @flow
 **/

import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

const Character: () => React$Node = ({item, isSelected, onSelect}) => {
    return (
        <>
            {console.log('item render', item.id)}
            <TouchableOpacity
                style={[styles.itemWrap, !!isSelected && styles.active,
                ]} onPress={() => onSelect(item.id)}>
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
                </View>
            </TouchableOpacity>
        </>
)
};

const areEqual = (prevProps, nextProps) => {
    return prevProps.isSelected === nextProps.isSelected
};


export default React.memo(Character);
// export default Character;

