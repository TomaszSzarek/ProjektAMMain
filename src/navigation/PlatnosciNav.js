import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrzelewNaTelefon } from '../views/Platnosci/PrzelewNaTelefon/index.js';
import { PrzelewZwykly } from '../views/Platnosci/PrzelewZwykly/index.js';
import {Platnosci} from '../views/Platnosci/index.js';

const Stack = createNativeStackNavigator();

const optionScreen = {
  headerShown: false
}

const PlatnosciNav = () => (
    <Stack.Navigator initialRouteName="Platnosci">
      <Stack.Screen name="PlatnosciView" options={optionScreen} component={Platnosci} />
      <Stack.Screen name="PrzelewZwykly" options={optionScreen} component={PrzelewZwykly} />
      <Stack.Screen name="PrzelewNaTelefon" options={optionScreen} component={PrzelewNaTelefon} />
    </Stack.Navigator>
);

export default PlatnosciNav;