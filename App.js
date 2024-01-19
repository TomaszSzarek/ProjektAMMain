import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Zaloguj from'./src/views/Logowanie/Zaloguj.js' ;

import Log1 from './src/views/Logowanie//Log1.js';
import Log2 from './src/views/Logowanie//Log2.js';
import Log3 from './src/views/Logowanie//Log3.js';
import RejestracjaNav from './src/navigation/RejestracjaNav';
import TabNav from './src/navigation/Tab.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Zaloguj">
        <Stack.Screen name="Zaloguj" options={{ headerShown: false }} component={Zaloguj} />
        <Stack.Screen name="Log1" options={{ headerShown: false }} component={Log1} />
        <Stack.Screen name="Log2" options={{ headerShown: false }} component={Log2} />
        <Stack.Screen name="Log3" options={{ headerShown: false }} component={Log3} />
        <Stack.Screen name="RejestracjaNav" options={{ headerShown: false }} component={RejestracjaNav} />
        <Stack.Screen name="TabNav" options={{ headerShown: false }} component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}