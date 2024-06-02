import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteParamList } from './RouteParamList';
import { HOME_SCREEN } from '../constants/RouteConstant';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator<RouteParamList>();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
                <Stack.Screen name={HOME_SCREEN} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})