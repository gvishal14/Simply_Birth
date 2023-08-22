import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image, Pressable, Text, View
} from 'react-native';
import AppButton from '../../../components/AppButton';
import AppTextInput from '../../../components/AppTextInput';
import { horizontalScale } from '../../../utils/Metrics';
import styles from '../styles';
import CheckBox from 'react-native-check-box'

export default function Login() {

    const { navigate, reset } = useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>

            <Image
                style={styles.backgroundImage}
                source={require('../../../assets/images/butterflyback.png')} />

            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />

            <Text style={styles.header}>Login</Text>

            <AppTextInput title='Email' placeholder="Enter your email id" />
            <AppTextInput title='Password' placeholder="Enter your password" />

            <Text onPress={() => navigate('ForgotPassword')} style={styles.forgotPass}>Forgot Password?</Text>

            <AppButton onPress={() => reset({ routes: [{ name: 'ProfileSetup' }] })} label='Login' />

        </View>
    );
}
