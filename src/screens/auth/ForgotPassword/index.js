import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image, Text, View
} from 'react-native';
import AppButton from '../../../components/AppButton';
import AppTextInput from '../../../components/AppTextInput';
import styles from '../styles';


export default function ForgotPassword() {
    const { navigate, goBack } = useNavigation()

    return (
        <View style={styles.container}>

            <Image
                style={styles.backgroundImage}
                source={require('../../../assets/images/butterflyback.png')} />

            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />

            <Text style={styles.header}>Forgot Password</Text>

            <AppTextInput placeholder="Enter email or phone number" title='Enter you email or phone number' />
            <AppButton label='Sent OTP' onPress={() => navigate('OtpVerification')} />

        </View>
    );
}