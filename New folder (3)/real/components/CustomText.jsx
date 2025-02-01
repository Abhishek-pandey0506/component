import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../utils';

const CustomText = ({
  children,
  style,
  regular,
  medium,
  semiBold,
  bold,
  size = SIZES.medium,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.defaultStyle,
        {
          fontSize: size,
          fontFamily: bold
            ? FONTS.bold
            : semiBold
            ? FONTS.semiBold
            : medium
            ? FONTS.medium
            : FONTS.regular,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    color: '#000000',
  },
});

export default CustomText;