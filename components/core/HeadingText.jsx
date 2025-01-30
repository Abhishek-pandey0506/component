import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Colors, Fonts } from '../../resources';
import { moderateScale, moderateScaleVertical, textScale } from '../../_helpers';

const HeadingText = ({ title, style }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{title}</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: moderateScaleVertical(20),
  },
  text: {
    fontSize: textScale(24),
    color: Colors.text,
    fontWeight: 'bold',
    fontFamily: Fonts.bold,
    paddingVertical: moderateScaleVertical(5),
  },
  line: {
    width: moderateScale(60),
    height: moderateScaleVertical(4),
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(2),
  },
});

export default HeadingText;
