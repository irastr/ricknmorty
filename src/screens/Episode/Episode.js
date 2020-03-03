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
import Expandable from './Expandable'

// type ISO8601 = string
// type DateString = string
//
// type Episode = {
//     id: number,
//     name: string,
//     air_date: DateString,
//     episode: string,
//     characters: String[],
//     url: string,
//     created: ISO8601
// }


const EpisodeDetail = ({route}) => {
    const {item}: Episode = route.params;
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    console.log(item.characters);

    useEffect(()=> {
        const makeApiCall = async () => {
            try {
                const characters = await Promise.all(item.characters.map((char) => fetchData(char)));
                setCharacters(characters);
                setLoading(false);
            } catch(err) {
                setLoading(false);
                console.log(err, 'error')
            }
        };
        makeApiCall()
    }, []);

    console.log(characters, 'chars');

    const renderItem = (item: Character) => {
        return (
            <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.img}/>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemSubText}>{item.location.name}</Text>
            </View>
        )
    };

    return (
        <>
        <ScrollView style={styles.container}>
            <Text style={styles.episodeTitle}>{item.name}</Text>
            <Text style={styles.episodeSubTitle}>{item.episode}</Text>
            <Text style={styles.episodeDate}>{item.air_date}</Text>
            <FlatList
                data={characters}
                renderItem={({item}) => renderItem(item)}
                key={item => String(item.id)}
                horizontal={true}
                ListEmptyComponent={loading && <ActivityIndicator size="large" color={colors.black}/>}
            />
            <Expandable>
                <Expandable.Header>
                    <Text style={styles.headerText}>Header</Text>
                    <Text style={styles.headerSubText}>Lorem ipsum dolor sit amet</Text>
                    <Expandable.Icon />
                </Expandable.Header>
                <Expandable.Body>
                    <Text>Lorem ipsum dollor sit amet</Text>
                </Expandable.Body>
            </Expandable>
        </ScrollView>
        </>
    )

};

export default EpisodeDetail
