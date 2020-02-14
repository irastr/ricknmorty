/**
 * @format
 * @flow
 */

import React, {useCallback, useEffect, useState} from 'react';
import Header from './Header';
import Character from './Character';


import {ActivityIndicator, FlatList} from 'react-native';
import {useFetch} from '../../res/utils'

const baseUrl = 'https://rickandmortyapi.com/api/';


const CharactersList: () => React$Node = ({navigation}) =>  {
    const [options, setOptions] = useState({page: 1});
    const [selected, setSelected] = useState(new Map());
    const [page, setPage] = useState(1);
    const [value, onTextChange] = useState('');
    const [characters, loading] = useFetch('character/', options);


    const onSelect = useCallback((id) => {
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
        setSelected(newSelected);
        }, []
    );

    useEffect(()=> setOptions({name: value.toLowerCase(), page: 1}), [value]);


    console.log(characters, 'CHARS');

    const getOptions = () => {
        options.name ? setOptions({...options, page: options.page + 1}) : setOptions({page: options.page + 1})
    };
    // return useMemo(() => {
        return (
            <>
                {loading ? <ActivityIndicator size="large" color='#ed8240'/> :
                    <FlatList
                        data={characters}
                        renderItem={({item}) => <Character item={item} isSelected={selected.get(item.id)}
                                                           onSelect={onSelect} navigation={navigation} value={value}/>}
                        keyExtractor={item => String(item.id)}
                        onEndReached={() => getOptions()}
                        onEndReachedThreshol={50}
                        ListHeaderComponent={<Header value={value} onTextChange={onTextChange} setOptions={setOptions} options={options}/>}
                        extraData={value || characters.length}
                    /> }
            </>
        )
    // }, [loading, characters.length, selected, value])
};


export default CharactersList;
