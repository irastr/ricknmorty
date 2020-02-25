/**
 * @format
 * @flow
 */

import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

const Filter: () => React$Node = ({item, index, isActive, onChoseFilter, type }) =>  {
    return (
        <TouchableOpacity onPress={() => onChoseFilter(item, index, type)}
                          style={[styles.filter, isActive && styles.active]}>
            <Text style={styles[isActive ? 'filterTextActive' : 'filterText']}> {item}</Text>
        </TouchableOpacity>
    )
};


export default Filter;
