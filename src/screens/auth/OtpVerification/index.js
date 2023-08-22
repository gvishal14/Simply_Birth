import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image, Text, View
} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import AppButton from '../../../components/AppButton';
import { horizontalScale, moderateScale, verticalScale } from '../../../utils/Metrics';
import styles from '../styles';


export default function OtpVerification() {
    const navigation = useNavigation()
    const [otp, setOtp] = useState("")

    return (
        <View style={styles.container}>

            <Image
                style={styles.backgroundImage}
                source={require('../../../assets/images/butterflyback.png')} />

            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />

            <Text style={styles.header}>OTP Verification</Text>
            <Text style={styles.subtitle}>We’ve sent you an OTP on your email address, please check and verify your account.</Text>
            <OtpInputs
                handleChange={setOtp}
                numberOfInputs={4}
                value={otp}
                style={{ flexDirection: 'row', marginVertical: verticalScale(20) }}
                inputContainerStyles={{
                    backgroundColor: '#F5F5F5',
                    minHeight: verticalScale(50),
                    marginEnd: horizontalScale(20),
                    justifyContent: 'center',
                    borderRadius: moderateScale(5),
                    width: verticalScale(50),
                }}
                inputStyles={{ fontSize: moderateScale(24), textAlign: 'center' }}
            />
            <AppButton label='Verify'
                onPress={() => { navigation.navigate('ResetPassword') }} />
        </View>
    );
}
