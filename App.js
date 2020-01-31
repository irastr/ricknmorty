/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect, useCallback } from 'react';



import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {fetchData} from './src/res/utils'


const App: () => React$Node = () => {
  const [data, setData] = useState({isLoading: false, list: [], page: 1});
  const [selected, setSelected] = useState(new Map());


  useEffect(() => {
    loadData(true)
  },[]);
  // если написать [page] будет вызываться при маунте и каждый раз, когда page будет меняться. отлчие от use callback - он вызовет определенную функцию, только если поменяется значение(для оптимизации что б не создавались ссылки при каждом рендере)

  const loadData = async (loader: boolean) => {
    setData({...data, isLoading: loader});
    const baseUrl = 'https://rickandmortyapi.com/api/';
    try {
      const json = await fetchData(`${baseUrl}/character/?page=${data.page}`);
      console.log(data, 'data');
      setData({...data, isLoading: false, list: [...data.list, ...json.results], page: data.page+1});
    } catch(err) {
      console.log('Error! ' + err);
      setData({...data, isLoading: false});
    }
  };

  //для оптимизации(что б перерендер компонента не создавал функцию, когда ничего не поменялось), возвращает одну и туже функцию, до тех пор, пока аргументы не изменились, useCallback используется, когда важна постоянность ссылок на функцию
  const onSelect = useCallback(
      (id) => {
        // через конструктор, потому что в обратном случае, после мутации ссылка все равно будет та же и рендера не произойдет
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
        setSelected(newSelected);
      },
      [selected],
  );

  const renderItem = (item) => {
    return (
        <TouchableOpacity
            style={[styles.itemWrap, !!selected.get(item.id) && styles.active,
          ]} onPress={() => onSelect(item.id)}>
          <Image source={{uri: item.image}} style={styles.img}/>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {item.name}
            </Text>
            <Text style={styles.subTitle}>
              {`Location: ${item.location.name}`}
            </Text>
            <Text style={styles.subTitle}>
              {`Species: ${item.species}`}
            </Text>
          </View>
        </TouchableOpacity>
    )
  };

  const renderHeader = () => {
    return (
        <View style={styles.header}>
          <TextInput style={styles.input} placeholder={'Find it'} placeholderTextColor={'#333333'}/>
          <Image style={styles.icon} source={require('./src/res/img/search.png')}/>
        </View>
    )
  };


  const renderList = () => {
    return (
        <FlatList
            data={data.list}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => String(item.id)}
            onEndReached={() => loadData()}
            onEndReachedThreshol={50}
            extraData={data.length}
            ListHeaderComponent={renderHeader}
        />
    )
  };

  return (
      <SafeAreaView style={styles.container}>
        {data.isLoading ? <ActivityIndicator size="large" color='#ed8240' /> : (renderList())}
      </SafeAreaView>
  );
};

//setCount = setState,  в который ме передаем новое значение стейта для этой переменной

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemWrap: {
    borderColor: 'transparent',
    borderWidth: 2,
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: '#FFFFFF',
    padding: 10
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  title: {
    color: '#ed8240',
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 5
  },
  textWrap: {
    flex: 1
  },
  subTitle: {
    color: '#333333',
    fontWeight: '500',
    fontSize: 12
  },
  active: {
    borderColor: `rgba(237,130,64, 1)`
  },
  header: {
    height: 50,
    padding: 10,
    backgroundColor: `rgba(237,130,64, 1)`,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  input: {
    height: 30,
    width: '100%',
    borderColor: '#ec9d6d',
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#ec9d6d',
    paddingLeft: 40,
    color: '#333333'
  },
  icon: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: '50%',
    left: 20
  }
});


export default App;
