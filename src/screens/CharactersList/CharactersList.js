/**
 * @format
 * @flow
 */

import React, {useCallback, useState} from 'react';
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


    // return useMemo(() => {
        return (
            <>
                {loading ? <ActivityIndicator size="large" color='#ed8240'/> :
                    <FlatList
                        data={characters}
                        renderItem={({item}) => <Character item={item} isSelected={selected.get(item.id)}
                                                           onSelect={onSelect} navigation={navigation}/>}
                        keyExtractor={item => String(item.id)}
                        onEndReached={() => setOptions({...options, page: options.page + 1})}
                        onEndReachedThreshol={50}
                        ListHeaderComponent={<Header value={value} onTextChange={onTextChange} setOptions={setOptions} options={options}/>}
                        extraData={value}
                    /> }
            </>
        )
    // }, [loading, characters.length, selected, value])
};


export default CharactersList;
