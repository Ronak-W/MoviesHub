import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//importing Bottom Tab screens
import Search from './Search'
import Profile from './Profile'

//importing Home stack screen
import HomeStack from './HomeStack'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
          headerStyle : {
          backgroundColor : '#000000',
          },
          headerTitleStyle : {
            fontSize: 24,
            fontWeight: 'bold', 
            fontFamily: 'Helvetica',
            color: 'white', 
          },
          tabBarStyle : {
            backgroundColor : '#6200EE',
          },
          tabBarInactiveTintColor : '91889f',
          tabBarActiveTintColor : 'white'
    }
      
      }>
        <Tab.Screen name = 'HomeStack' 
                    component={HomeStack} 
                    options={{
                      headerShown : false
                    }}
                    />
        <Tab.Screen name = 'Search' component={Search} />
        <Tab.Screen name = 'Profile' component={Profile} />
      </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})