import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Task from './src/pages/Task';
import NewTask from './src/pages/Task';
import Details from './src/pages/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Task'>
        
        {/* Task */}
        <Stack.Screen 
          name='Task'
          component={Task}
          options={{
            headerTintColor: "#f92e6a",

          }}
        />

        {/* New Task */}
        <Stack.Screen 
          name='New Task'
          component={NewTask}
          options={{
            headerTintColor: "#f92e6a",

          }}
        />

        {/*  Details */}
        <Stack.Screen 
          name='Details'
          component={Details}
          options={{
            headerTintColor: "#f92e6a",

          }}
        />
        

      </Stack.Navigator>
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
