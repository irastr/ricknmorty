/**
 * @format
 * @flow
 **/

import React from 'react';
import {Image, TextInput, View} from "react-native";
import {styles} from "./styles";

const Header = () => {
    return (
        <View style={styles.header}>
            <TextInput style={styles.input} placeholder={'Find it'} placeholderTextColor={'#333333'}/>
            <Image style={styles.icon} source={require('../../../res/img/search.png')}/>
        </View>
    )
};

export default Header;
