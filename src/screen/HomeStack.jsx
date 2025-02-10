import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import MovieDetails from './MovieDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='MovieDetails'
        component={MovieDetails}
        options={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            fontFamily: 'Helvetica',
            color: 'white',
          },
          headerTintColor: 'white'
        }

        }
      />
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})