import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { CreateGenero } from './screens/CreateGenero'
import { MoviesList } from './screens/MoviesList'
import { Menu } from './screens/Menu'
import { CreateMovie } from './screens/CreateMovie'

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Menu' component={Menu} />
      <Stack.Screen name="Crear Genero" component={CreateGenero} />
      <Stack.Screen name='List' component={MoviesList} />
      <Stack.Screen name='Crear Pelicula' component={CreateMovie}/>
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
