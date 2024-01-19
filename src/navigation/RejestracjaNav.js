import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistrationProvider } from '../views/Logowanie/RegistrationContext.js';
import Zaloguj from'../views/Logowanie/Zaloguj.js' ;
import Rej1 from '../views/Logowanie/Rej1.js';
import Rej2 from '../views/Logowanie/Rej2.js';
import Rej3 from '../views/Logowanie/Rej3.js';
import Rej4 from '../views/Logowanie/Rej4.js';
import Rej4_5 from '../views/Logowanie/Rej4_5.js';
import Rej5 from '../views/Logowanie/Rej5.js';
import Rej6 from '../views/Logowanie/Rej6.js';
import Rej7 from '../views/Logowanie/Rej7.js';
import Rej8 from '../views/Logowanie/Rej8.js';
import Rej9 from '../views/Logowanie/Rej9.js';
import Rej10 from '../views/Logowanie/Rej10.js';

const Stack = createNativeStackNavigator();

const optionScreen = {
  headerShown: false
}

const RejestracjaNav = () => (
  <RegistrationProvider>
    <Stack.Navigator initialRouteName="Rej1">
        <Stack.Screen name="Zaloguj" options={{ headerShown: false }} component={Zaloguj} />
        <Stack.Screen name="Rej1" options={{ headerShown: false }} component={Rej1} />
        <Stack.Screen name="Rej2" options={{ headerShown: false }} component={Rej2} />
        <Stack.Screen name="Rej3" options={{ headerShown: false }} component={Rej3} />
        <Stack.Screen name="Rej4" options={{ headerShown: false }} component={Rej4} />
        <Stack.Screen name="Rej4_5" options={{ headerShown: false }} component={Rej4_5} />
        <Stack.Screen name="Rej5" options={{ headerShown: false }} component={Rej5} />
        <Stack.Screen name="Rej6" options={{ headerShown: false }} component={Rej6} />
        <Stack.Screen name="Rej7" options={{ headerShown: false }} component={Rej7} />
        <Stack.Screen name="Rej8" options={{ headerShown: false }} component={Rej8} />
        <Stack.Screen name="Rej9" options={{ headerShown: false }} component={Rej9} />
        <Stack.Screen name="Rej10" options={{ headerShown: false }} component={Rej10} />
    </Stack.Navigator>
  </RegistrationProvider>
);

export default RejestracjaNav;