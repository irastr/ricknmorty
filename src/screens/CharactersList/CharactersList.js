/**
 * @format
 * @flow
 */

import React, {useCallback, useEffect, useRef, useState} from 'react';
import Header from './Header';
import Character from './Character';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {ActivityIndicator, FlatList, TouchableOpacity, UIManager, LayoutAnimation} from 'react-native';
import {useFilter} from '../../res/utils'
import styles from './styles'
import colors from '../../res/colors'

if (Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const baseUrl = 'https://rickandmortyapi.com/api/';

const CharactersList: () => React$Node = ({navigation}) =>  {
    const [options, setOptions] = useState({page: 1, status: '', gender: '', name: ''});
    const [selected, setSelected] = useState(new Map());
    const [value, onTextChange] = useState('');
    const isInitialMount = useRef(true);
    const scrollViewRef = useRef<ScrollView>();
    const [characters, loading] = useFilter('character/', options);
    const [floatingButton, setFloatButton] =  useState(false);
    // const [isScrolling, setScrolling] = useState(false);


    const onSelect = useCallback((id) => {
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
        setSelected(newSelected);
        }, [selected]
    );

    const onChoseFilter = useCallback((item, index, type) => {
         setOptions({...options, page: 1, [type]: options[type] === item ? '' : item})
        }, [options]
    );

    // const onClearAll = useCallback(() => {
    //     onTextChange('');
    //     // setOptions({...options, name: ''})
    // }, [options]);

    useEffect(() => {
            if (isInitialMount.current) {
                isInitialMount.current = false;
            } else {
                setOptions({...options, name: value.toLowerCase(), page: 1})
            }
        }, [value]);

    // console.log('scrolling', isScrolling);
    // return useMemo(() => {
        return (
            <>
                {loading ? <ActivityIndicator size="large" color={colors.black}/> :
                    <>
                        <FlatList
                            ref={scrollViewRef}
                            onScroll={event => {
                                const offset = event.nativeEvent.contentOffset.y;
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                setFloatButton(offset > 250)
                            }}
                            data={characters}
                            renderItem={({item}) => <Character item={item} isSelected={selected.get(item.id)}
                                                               onSelect={onSelect} navigation={navigation}
                                                               value={value}/>}
                            keyExtractor={item => String(item.id)}
                            onEndReached={() => setOptions({...options, page: options.page + 1})}
                            onEndReachedThreshol={50}
                            ListHeaderComponent={<Header value={value}
                                                         onTextChange={onTextChange}
                                                         setOptions={setOptions}
                                                         options={options}
                                                         onChoseFilter={onChoseFilter}/>}
                            extraData={value || characters.length}
                            style={styles.container}
                            // onMomentumScrollBegin={() => setScrolling(true)}
                            // onMomentumScrollEnd={() => setScrolling(false)}
                            // onScroll={event => console.log(event.nativeEvent.contentOffset.y, 'event')}
                        />
                        {
                            floatingButton && (
                                <TouchableOpacity style={styles.upButton}
                                                  onPress={() => scrollViewRef.current.scrollToOffset({
                                                      animated: true,
                                                      offset: 0
                                                  })}>
                                    <FontAwesomeIcon icon={faChevronUp} style={styles.upIcon} size={25}/>
                                </TouchableOpacity>
                            )
                        }

                    </>
                }
            </>
        )
    // }, [loading, characters.length, selected, value])
};


export default CharactersList;
