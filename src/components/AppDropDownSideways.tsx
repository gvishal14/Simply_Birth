import React from 'react';
import { Image, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import { FONTS } from '../constants';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';

interface Props extends DropdownProps {
    title: string
}

export default function AppDropDownSideways(props: Props) {
    return (
        <View style={{
            flexDirection: 'row',
            marginVertical: verticalScale(10),
            alignItems: 'center'
        }}>
            <Text style={{
                flex: 1,
                fontSize: moderateScale(20),
                fontFamily: FONTS.w400
            }}>{props.title}</Text>
            <Dropdown
                style={{
                    minHeight: verticalScale(45),
                    marginTop: verticalScale(5),
                    paddingStart: horizontalScale(5),
                    borderBottomWidth: 1, flex: 2,
                    borderBottomColor: '#0000004F'
                }}
                placeholderStyle={{
                    fontSize: moderateScale(18),
                    color: '#37354166',
                    fontFamily: FONTS.w400
                }}
                selectedTextStyle={{
                    fontSize: moderateScale(18),
                    fontFamily: FONTS.w400,
                }}
                // iconStyle={styles.iconStyle}
                itemTextStyle={{
                    fontSize: moderateScale(18),
                    fontFamily: FONTS.w400,
                }}
                maxHeight={200}
                placeholder="Select"
                renderRightIcon={() => <Image style={{ margin: 10 }} source={require('../assets/images/dropdown.png')} />}
                value={{}}
                {...props}
                onChange={item => {
                    console.log(item.value);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});