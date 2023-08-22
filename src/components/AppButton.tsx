import React from 'react';
import { Pressable, StyleSheet, Text, ViewProps } from 'react-native';
import { FONTS } from '../constants';
import { moderateScale } from '../utils/Metrics';

interface AppButtonProps {
    label: string,
    onPress?: (() => void)
}

export default function AppButton(props: AppButtonProps) {
    return (
        <Pressable style={{
            height: moderateScale(50), backgroundColor: '#7EB1B5', marginVertical: moderateScale(15),
            borderRadius: moderateScale(25), justifyContent: 'center', alignItems: 'center', elevation: 2
        }} onPress={props.onPress}>
            <Text style={{
                color: 'white', fontSize: moderateScale(22),
                fontFamily: FONTS.w700
            }}>{props.label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({

});