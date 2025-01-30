/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts } from '../../resources';
import { moderateScale, moderateScaleVertical, textScale } from '../../_helpers';

const Checkbox = ({ label, checked, onPress, labelStyle, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Icon
        name={checked ? 'checkbox' : 'square-outline'}
        size={textScale(20)}
        color={Colors.secondary}
      />
      <Text style={[styles.label, labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScaleVertical(5),
  },
  label: {
    marginLeft: moderateScale(8),
    fontSize: textScale(16),
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
});

export default Checkbox;
