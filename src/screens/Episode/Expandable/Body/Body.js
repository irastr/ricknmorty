import React, { useContext } from 'react'
import {View} from 'react-native';
import { ExpandableContext } from '../Expandable'
import {styles} from './styles'

const Body = ({ children, ...otherProps }) => {
    const { expanded } = useContext(ExpandableContext);

    return !!expanded && (
        <View style={styles.body} {...otherProps}>
            {children}
        </View>
    )
};

export default Body
