import React, {useContext} from 'react'
import {ExpandableContext} from '../Expandable'
import {Text, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

const Icon = ({...otherProps}) => {
    const { expanded } = useContext(ExpandableContext);

    return (
        <View style={styles.icon} {...otherProps}>
            <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} style={styles.upIcon} size={15}/>
        </View>
    )
};

export default Icon
