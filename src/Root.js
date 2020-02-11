import React from 'react';
import CharactersList from './screens/CharactersList';
// import CharacterDetails from './src/screens/CharacterList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CharactersList">
                <Stack.Screen name="Characters" component={CharactersList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;


