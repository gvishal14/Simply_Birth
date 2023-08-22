import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Login from '../screens/auth/Login';
import OtpVerification from '../screens/auth/OtpVerification';
import ProfileSetup from '../screens/auth/ProfileSetup';
import ResetPassword from '../screens/auth/ResetPassword';

const Stack = createNativeStackNavigator();

function AuthNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
