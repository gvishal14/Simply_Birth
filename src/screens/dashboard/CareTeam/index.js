import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView, StyleSheet, Text
} from 'react-native';


export default function CareTeam() {

    const { navigate, reset } = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>My Care Team</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});