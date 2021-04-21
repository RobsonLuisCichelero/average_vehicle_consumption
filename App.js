import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CalculoProvider from './src/context/calculo';

import Home from './src/pages/Home';
import Resultado from './src/pages/Resultado';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CalculoProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Resultado" component={Resultado} options={{ headerTitleAlign: 'center'}}>
          </Stack.Screen>
        </Stack.Navigator>
      </CalculoProvider>
    </NavigationContainer>
  );
}