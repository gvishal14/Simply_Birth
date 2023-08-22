import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, TextProps, ViewProps } from 'react-native';

interface Props extends TextProps {
    children: React.ReactNode
}

export default function AppText(props: Props) {
    return <Text {...props}>{props.children}</Text>;
}

const styles = StyleSheet.create({

});