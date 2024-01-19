import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pozyczki } from '../views/Pozyczki/index.js';
import { WidokKarty } from '../views/Produkty/WidokKarty/index.js';
import {Produkty} from '../views/Produkty/index.js';

const Stack = createNativeStackNavigator();

const optionScreen = {
  headerShown: false
}

const ProduktyNav = () => (
    <Stack.Navigator initialRouteName="Produkty">
      <Stack.Screen name="ProduktyView" options={optionScreen} component={Produkty} />
      <Stack.Screen name="Pozyczki" options={optionScreen} component={Pozyczki} />
      <Stack.Screen name="WidokKarty" options={optionScreen} component={WidokKarty} />
    </Stack.Navigator>
);

export default ProduktyNav;