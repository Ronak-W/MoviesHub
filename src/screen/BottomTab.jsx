import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//importing Bottom Tab screens
import ProfileStack from './ProfileStack'
import SubscriptionScreen from './SubscriptionScreen'

//importing Home stack screen
import HomeStack from './HomeStack'

//importing saved icons
import HomeIcon from '../assets/home.png';
import SubscriptionIcon from '../assets/subscription.png';
import UserIcon from '../assets/user.png'


const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: 'Helvetica',
          color: 'white',
        },
        tabBarStyle: {
          backgroundColor: '#6200EE',
        },
        tabBarShowLabel: false
      }

      }>
      <Tab.Screen name='HomeStack'
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={HomeIcon}
              style={{ width: 20, height: 20, tintColor: 'white', marginTop: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen name='Subscription '
        component={SubscriptionScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={SubscriptionIcon}
              style={{ width: 20, height: 20, tintColor: 'white', marginTop: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen name='Profile'
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={UserIcon}
              style={{ width: 20, height: 20, tintColor: 'white', marginTop: 10 }}
            />
          ),
        }} />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})