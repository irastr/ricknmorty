/**
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {ActivityIndicator, Image, Text} from 'react-native';
import {useFetch} from "../../res/utils";
import {styles} from "./styles";


const Locations = ({route}) => {
    // const [url] = useState('route.params.locationUrl');
    const [location, loading] = useFetch(route.params.locationUrl);

    useEffect(()=> {

    }, [location]);

    const renderItem = (item) => {
        return (
            <Image source={{uri: item.image}} style={styles.img}/>
        )
    };


    return (
        <>
            {loading ? <ActivityIndicator size="large" color='#ed8240'/> : <Text>Hello form locations</Text>}
        </>
    )

};

export default Locations
