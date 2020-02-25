/**
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, ScrollView, Text, View} from 'react-native';
import {styles} from "./styles";
import {Character, Episode} from '../../res/models'
import {fetchData} from "../../res/utils";
import colors from "../../res/colors";



const Login = ({route}) => {
    return (
        <>
            <Text style={styles.episodeTitle}>Login</Text>
        </>
    )

};

export default Login
