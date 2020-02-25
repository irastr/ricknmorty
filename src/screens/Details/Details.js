/**
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Animated, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles";
import {fetchData} from '../../res/utils'
import colors from "../../res/colors";

type ISO8601 = string
type DateString = string

type Episode = {
    id: number,
    name: string,
    air_date: DateString,
    episode: string,
    characters: String[],
    url: string,
    created: ISO8601
}

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


const Details = ({route, navigation}) => {
    const { item } = route.params;
    const [activeTab, setActiveTab] = useState<number>(0);
    const [scrollY] = useState(new Animated.Value(0));
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const tabs = ['Episode', 'Location'];

    useEffect(() => {
        const makeApiCall = async () => {
            try {
                const location = await fetchData(item.location.url);
                const episodes = await Promise.all(item.episode.map((episode) => fetchData(episode)));
                setEpisodes(episodes);
                setLoading(false);
            } catch(err) {
                setLoading(false);
                console.log(err, 'error')
            }
        };
        makeApiCall()
    }, []);

    const getHeight = () => {
        const interpolation = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            useNativeDriver: true,
            // extrapolate: 'clamp'
        });
        return {height: interpolation}
    };

    const getImageOpacity = () => {
        const interpolation = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
        return {opacity: interpolation}
    };

    const renderItem = (item: Episode) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Episode', {item})}>
                <Text style={styles.episodeTitle}>{`${item.episode}`}</Text>
                <Text>{`${item.name} `}</Text>
                <Text style={styles.episodeSubTitle}>{`${item.air_date}`}</Text>
            </TouchableOpacity>
        )
    };

    const renderTabs = () => {
        console.log('render tabs');
        return (
            <>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subTitle}>Status: {item.status}</Text>
                    <Text style={styles.subTitle}>Species: {item.species}</Text>
                </View>
                <View style={styles.tabWrap}>
                    {tabs.map((tab, index) => {
                        const isActive = activeTab === index;
                        return (<TouchableOpacity
                            key={index}
                            activeOpacity={1}
                            style={[styles.tab, isActive && styles.activeTab]}
                            onPress={() => {
                                setActiveTab(index)
                            }}>
                            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{tab}</Text>
                        </TouchableOpacity>)
                    })}
                </View>
            </>
        )
    };

    console.log(episodes, 'episode');
    return (
        <>
            <View style={{flex: 1}}>
            <FlatList
                style={styles.container}
                data={(activeTab === 0)? episodes : []}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => renderItem(item)}
                scrollEventThrottle={16}
                ListHeaderComponent={renderTabs}
                ListEmptyComponent={loading &&  <ActivityIndicator size="large" color={colors.black}/>}
                onScroll={Animated.event(
                    // scrollY = e.nativeEvent.contentOffset.y
                [{nativeEvent: {contentOffset: {y: scrollY}}}]
            )}
            />
            <Animated.View style={[styles.header, getHeight()]}>
                <Animated.Image source={{uri: item.image}} style={[styles.img, getImageOpacity(), getHeight()]}/>
            </Animated.View>
            </View>
        </>
    )
};

export default Details
