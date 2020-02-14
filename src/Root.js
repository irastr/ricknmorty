import React from 'react';
import CharactersList from './screens/CharactersList';
import Locations from './screens/Locations';
import Episodes from './screens/Episodes';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Characters">
                <Stack.Screen name="Characters" component={CharactersList} />
                <Stack.Screen name="Locations" component={Locations} />
                <Stack.Screen name="Episodes" component={Episodes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;


