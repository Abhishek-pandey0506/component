import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomIcon, { ICON_TYPE } from './CustomIcon';
import { Colors, Fonts } from '../resources';
import { moderateScale, moderateScaleVertical, textScale } from '../_helpers';

const NoDataFound = ({ message = 'No data found', icon, iconType }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <CustomIcon
                    name={icon}
                    origin={iconType}
                    size={moderateScale(70)}
                    color={Colors.lightGray}
                />
            </View>
            <Text style={styles.NoPostText}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    NoPostText: {
        fontSize: textScale(24),
        color: Colors.text,
        fontFamily: Fonts.regular,
        marginBottom: moderateScaleVertical(20),
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.lightGray,
        padding: moderateScale(20),
        height: moderateScaleVertical(160),
        width: moderateScale(160),
        borderRadius: moderateScaleVertical(80),
        marginBottom: moderateScaleVertical(20),
    }
});

export default NoDataFound;
