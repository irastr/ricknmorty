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

const information = [
    {
        header: 'Why everyone should live forever',
        note: 'This is highly sensitive information ... !!!!'
    },
    {
        header: 'The internet disappears',
        note:
            'I just uncovered the biggest threat...'
    },
    {
        header: 'The truth about Elon musk and Mars!',
        note: 'Nobody tells you this...'
    }
];

const EpisodeDetail = ({route}) => {
    const {item}: Episode = route.params;
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [activeIndex, setActiveIndex] = useState(null);
    // const onExpand = evt => setActiveIndex(evt.target.dataset.index);
    const onExpand = index => setActiveIndex(index);


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


    const renderItem = (item: Character) => {
        return (
            <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.img}/>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemSubText}>{item.location.name}</Text>
            </View>
        )
    };

    const renderExpandable = () => (
        <Expandable style={styles.expandable}>
            <Expandable.Header>
                <Text style={styles.headerText}>Header</Text>
                <Text style={styles.headerSubText}>Lorem ipsum dolor sit amet</Text>
                <Expandable.Icon/>
            </Expandable.Header>
            <Expandable.Body>
                <Text style={styles.bodyText}>Lorem ipsum dollor sit amet</Text>
            </Expandable.Body>
        </Expandable>
    );

    const renderAccordion = () => (
        information.map(({header, note}, index)=> (
                <Expandable
                    shouldExpand={index === +activeIndex}
                    onExpand={() => onExpand(index)}
                    key={index}
                    style={styles.accordion}
                >
                    <Expandable.Header data-index={index}>
                        <Text style={styles.headerText}>{header}</Text>
                        <Text style={styles.headerSubText}>Some additional info</Text>
                        <Expandable.Icon />
                    </Expandable.Header>
                    <Expandable.Body>
                        <Text style={styles.bodyText}>{note}</Text>
                    </Expandable.Body>
                </Expandable>
            ))
    );


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
            {renderExpandable()}
            {renderAccordion()}
        </ScrollView>
        </>
    )

};

export default EpisodeDetail
