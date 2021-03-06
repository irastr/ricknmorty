import React, { useContext } from 'react'
import {TouchableOpacity} from 'react-native'
import { ExpandableContext } from '../Expandable'
import {styles} from './styles'

const Header = ({ children, ...otherProps }) => {
    const { toggle, expanded } = useContext(ExpandableContext);

    return (
        <TouchableOpacity onPress={toggle} style={[styles.header, expanded && styles.headerExpanded]} activeOpacity={1} {...otherProps}>
            {children}
        </TouchableOpacity>
    )
};

export default Header
