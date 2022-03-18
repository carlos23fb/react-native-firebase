import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { CreateUserScreen } from './screens/CreateUserScreen'
import { UserDetailScreen } from './screens/UserDetailScreen'
import { UsersList } from './screens/UsersList'

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={UsersList}/>
      <Stack.Screen name="Create" component={CreateUserScreen} />
      <Stack.Screen name="Detail" component={UserDetailScreen} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
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
