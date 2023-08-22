import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor="white" />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Auth" component={AuthNavigator} />
                    <Stack.Screen name="Dashboard" component={DashboardNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
});

export default RootNavigator;
