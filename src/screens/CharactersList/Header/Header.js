/**
 * @format
 * @flow
 **/

import React from 'react';
import {Image, TextInput, View} from "react-native";
import {styles} from "./styles";

const Header = ({value, onTextChange, setOptions, options}) => {

    const handleTextChange = (text) => {
        onTextChange(text);
        setOptions({name: value.toLowerCase()})
    };

    return (
        <View style={styles.header}>
            <TextInput
                style={styles.input}
                placeholder={'Find it'}
                placeholderTextColor={'#333333'}
                alue={value}
                onChangeText={text => handleTextChange(text)}
            />
            <Image style={styles.icon} source={require('../../../res/img/search.png')}/>
        </View>
    )
};

export default Header;
