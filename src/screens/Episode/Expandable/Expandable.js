/**
 * @format
 * @flow
 **/

import React, {createContext,  useEffect, useMemo, useRef} from 'react'
import { View} from 'react-native'
import Header from './Header'
import Icon from './Icon'
import Body from './Body'
import useExpanded from '../../../res/hooks/useExpanded'


export const ExpandableContext = createContext();
//We can pass defaultValue argument in createContext() and it is only used when a component does not have a matching Provider above it in the tree.
const { Provider } = ExpandableContext;

//Compound component
const Expandable: ()  => React$Node = ({onExpand, children, shouldExpand, ...otherProps}) => {
    const isExpandControlled = shouldExpand !== undefined;
    const {expanded, toggle} = useExpanded(false);
    const componentJustMounted = useRef(true);


    useEffect(
        () => {
            // run only when component is controlled.
            if (!componentJustMounted && !isExpandControlled) {
                //Do something after expand in parent component and receive state of expanded
                onExpand(expanded);
                componentJustMounted.current = false
            }
        },
        [expanded, onExpand, isExpandControlled]
    );


    const getState = isExpandControlled ? shouldExpand : expanded;
    const getToggle = isExpandControlled ? onExpand : toggle;


    //With use memo to create new reference only if expanded or toggle has changed
    // const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
    // { expanded: getState, toggle: getToggle } - ключу expanded даем значение getState. вместо expanded до этого
    const value = useMemo(() => ({ expanded: getState, toggle: getToggle }), [
        getState,
        getToggle
    ]);


    return (
        <Provider value={value}>
            <View {...otherProps}>
                {children}
            </View>
        </Provider>
    )
};

Expandable.Header = Header;
Expandable.Body = Body;
Expandable.Icon = Icon;

export default Expandable;
