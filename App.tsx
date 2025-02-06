import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTab from './src/screen/BottomTab'
import Login from './src/screen/Login'
import Signup from './src/screen/Signup'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name='Signup' component={Signup}  options={{headerShown : false}}/>
        <Stack.Screen name = 'Login' component={Login}
        options={{headerShown : false}}
        />
        <Stack.Screen name = 'BottomTab' component={BottomTab} options={{
          headerShown : false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})