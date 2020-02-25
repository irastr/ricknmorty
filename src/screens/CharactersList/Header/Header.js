/**
 * @format
 * @flow
 **/
// import { Animated } from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, TextInput, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import {styles} from "./styles";
import Filter from '../Filter'



const Header = ({value, onTextChange, onChoseFilter, options}) => {
    const inputEl = useRef(null);
    const isInitialMount = useRef(true);
    const [animated] = useState(new Animated.Value(0));
    const [inFocus, setFocus] = useState(false);

    const staticFilters = {status: ['alive', 'dead', 'unknown'], gender: ['female', 'male', 'genderless', 'unknown']};

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            Animated.timing(animated, {
                toValue: inFocus ? 1 : 0,
                duration: 400
            })
                .start();
        }
    }, [inFocus]);

    const getStyle = (values, style) => {
        const interpolation = animated.interpolate({
            inputRange: [0, 1],
            outputRange: values
        });
        return {
            [style]: interpolation
        };
    };

    const handleTextChange = (text) => {
        onTextChange(text);
    };

    const renderFilters = (type) => {
        return (
            <View style={styles.filters}>
                {
                    staticFilters[type].map((item, index) => {
                        const isActive = options[type] === item;
                        return (
                            <Filter key={index} isActive={isActive} onChoseFilter={onChoseFilter} item={item} index={index} type={type}/>
                        )
                    })
                }
            </View>
        )
    };

    console.log('focus', inFocus);

    return (
        <>
            <View style={styles.header}>
                {/*<TouchableOpacity style={styles.menuIconWrap} onPress={() => console.log('menu')}>*/}
                {/*    <FontAwesomeIcon icon={faBars} style={styles.menuIcon} size={25}/>*/}
                {/*</TouchableOpacity>*/}
                <TextInput
                    ref={inputEl}
                    style={[styles.input, inFocus && {borderColor: '#242425'}]}
                    value={value}
                    onChangeText={text => handleTextChange(text)}
                    onFocus={() => setFocus(true)}
                    clearButtonMode={'while-editing'}
                    onBlur={() => {!value && setFocus(false);}}
                />
                    <Animated.Text onPress={() => inputEl.current.focus()}
                        style={[styles.placeholder, getStyle([15, 10], 'fontSize'), getStyle(['50%', '5%'], 'top')]}>
                        Find by name
                    </Animated.Text>
                {/*<TouchableOpacity style={styles.iconClose} onPress={() => onTextChange('')}>*/}
                {/*    <Image style={styles.imgClose} source={require('../../../res/img/close.png')}/>*/}
                {/*</TouchableOpacity>*/}

            </View>
            <View style={styles.filtersWrap}>
                {renderFilters('status')}
                {renderFilters('gender')}
            </View>
        </>

    )
};

export default Header;
