/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Colors, Fonts } from '../../resources';
import { moderateScale, moderateScaleVertical, textScale } from '../../_helpers';
import CustomIcon from '../CustomIcon';

const Button = ({ title, onPress, style, textStyle, iconName, iconType, iconSize = 18, iconColor = Colors.white, isDisabled = false, showLoader = false }) => {
  return (
    <TouchableOpacity
      onPress={!isDisabled ? onPress : null}
      style={[styles.button, style, isDisabled && styles.disabledButton]}
      disabled={isDisabled}>
      <View style={styles.contentContainer}>
        {showLoader ? (
          <ActivityIndicator size="small" color={Colors.white} style={styles.loader} />
        ) : (
          <>
            {iconName && (
              <CustomIcon
                name={iconName}
                origin={iconType}
                size={iconSize}
                color={iconColor}
                style={styles.icon}
              />
            )}
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: moderateScaleVertical(15),
    width: "100%", // Full width minus padding
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: moderateScaleVertical(10),
  },
  disabledButton: {
    backgroundColor: Colors.gray,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: textScale(16),
    color: Colors.white,
    fontWeight: '600',
    fontFamily: Fonts.semiBold,
  },
  icon: {
    marginRight: moderateScale(8),
  },
  loader: {
    marginRight: moderateScale(8),
  },
});

export default Button;
