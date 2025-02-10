import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import WatchLaterScreen from './WatchLaterScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Profile'
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='WatchLaterScreen'
                component={WatchLaterScreen}
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
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack;

