/**
 * @format
 * @flow
 */

import React, {useCallback, useMemo, useState} from 'react';
import Header from './Header';
import Character from './Character';


import {ActivityIndicator, FlatList} from 'react-native';
import {useFetch} from '../../res/utils'


const CharactersList: () => React$Node = () =>  {
    const [selected, setSelected] = useState(new Map());
    const [page, setPage] = useState(1);
    const [characters, loading] = useFetch(page);

    const onSelect = useCallback((id) => {
        console.log(selected, 'selectedblabla');
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
        setSelected(newSelected);
        }, []
    );

    return useMemo(()=> {
        return (
            <>
                {console.log('main render!', selected)}
                {loading ? <ActivityIndicator size="large" color='#ed8240'/> :
                    <FlatList
                        data={characters}
                        renderItem={({item}) => <Character item={item} isSelected={selected.get(item.id)} onSelect={onSelect}/>}
                        keyExtractor={item => String(item.id)}
                        onEndReached={() => setPage(page + 1)}
                        onEndReachedThreshol={50}
                        ListHeaderComponent={Header}
                        // extraData={selected}
                    /> }
            </>
        )
    }, [loading, characters.length, selected])
};


export default CharactersList;
