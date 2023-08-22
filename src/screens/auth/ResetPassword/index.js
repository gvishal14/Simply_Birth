import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image, Text, View
} from 'react-native';
import AppButton from '../../../components/AppButton';
import AppTextInput from '../../../components/AppTextInput';
import styles from '../styles';


export default function ResetPassword() {
    const { navigate, goBack } = useNavigation()

    return (
        <View style={styles.container}>

            <Image
                style={styles.backgroundImage}
                source={require('../../../assets/images/butterflyback.png')} />

            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />

            <Text style={styles.header}>Reset Password</Text>

            <AppTextInput placeholder="Enter new password" title='New Password' />
            <AppTextInput placeholder="Enter your password again" title='Confirm Password' />
            <AppButton label='Reset' onPress={() => navigate('Login')} />

        </View>
    );
}