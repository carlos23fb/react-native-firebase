import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { CreateGenero } from './screens/CreateGenero'
import { MoviesList } from './screens/MoviesList'
import { Menu } from './screens/Menu'
import { CrearPelicula } from './screens/CrearPelicula'

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Menu' component={Menu} />
      <Stack.Screen name="Crear Genero" component={CreateGenero} />
      <Stack.Screen name='List' component={MoviesList} />
      <Stack.Screen name='Crear Pelicula' component={CrearPelicula}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
