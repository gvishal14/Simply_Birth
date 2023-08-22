import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    Pressable, Text, View
} from 'react-native';
import AppButton from '../../../components/AppButton';
import AppTextInputSideways from '../../../components/AppTextInputSideways';
import { verticalScale } from '../../../utils/Metrics';
import styles from '../styles';


export default function ProfileSetup() {

    const { navigate } = useNavigation()

    return (
        <View style={styles.container}>

            <Image
                style={styles.backgroundImage}
                source={require('../../../assets/images/butterflyback.png')} />

            <Image resizeMode='contain' source={require('../../../assets/images/logo.png')} />

            <Text style={styles.header}>Set up your profile</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.profileSetupLabel}>Your Photo</Text>
                <Pressable style={{ flex: 2 }}>
                    <Image style={styles.profilePic} />
                </Pressable>
            </View>

            <AppTextInputSideways title='First Name' placeholder='Enter your name' />
            <AppTextInputSideways title='Age' placeholder='Enter your age' />
            <AppTextInputSideways title='Address' placeholder='Enter your address' />
            <AppTextInputSideways title='Contact' placeholder='Enter your contact number' />
            <AppTextInputSideways title='Description' placeholder='Enter description' />

            <AppButton label='Continue' onPress={() => { navigate('Dashboard') }} />
        </View>
    );
}
