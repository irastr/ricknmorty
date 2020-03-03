import React from 'react';
import CharactersList from './screens/CharactersList';
import Episode from './screens/Episode';
import Details from './screens/Details';
import Login from './screens/Login'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Characters">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Characters" component={CharactersList} />
                <Stack.Screen name="Episode" component={Episode} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;


