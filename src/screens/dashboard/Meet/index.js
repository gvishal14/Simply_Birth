
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView, StyleSheet, Text
} from 'react-native';


export default function Meet() {

    const { navigate } = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Meet</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});