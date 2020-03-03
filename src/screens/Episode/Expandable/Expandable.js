/**
 * @format
 * @flow
 **/

import React, {createContext, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {LayoutAnimation, View} from 'react-native'
import Header from './Header'
import Icon from './Icon'
import Body from './Body'


export const ExpandableContext = createContext();
//We can pass defaultValue argument in createContext() and it is only used when a component does not have a matching Provider above it in the tree.
const { Provider } = ExpandableContext;


const Expandable: ()  => React$Node = ({onExpand, children}) => {
    const [expanded, setExpanded] = useState(false);
    const componentJustMounted = useRef(true);

    useEffect(
        () => {
            if (!componentJustMounted) {
                //Do something after expand in parent component and receive state of expanded
                onExpand(expanded);
                componentJustMounted.current = false
            }
        },
        [expanded]
    );


    const toggle = useCallback(
        //Function is created only on first mount, all another renders do not recreate function reference
        () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setExpanded(prevExpanded => !prevExpanded)
        },
        []
    );

    //With use memo to create new reference only if expanded or toggle has changed
    const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);


    return (
        <Provider value={value}>
            <View>
                {children}
            </View>
        </Provider>
    )
};

Expandable.Header = Header;
Expandable.Body = Body;
Expandable.Icon = Icon;

export default Expandable;
