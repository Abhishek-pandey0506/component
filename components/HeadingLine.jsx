import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, moderateScale, moderateScaleVertical } from '../utils';

const HeadingLine = ({containerStyle, innerStyle}) => {
  return (
    <View style={[styles.headingline, containerStyle ]}>
      <View style={[styles.headinglineInner, innerStyle]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingline: {
    height: moderateScale(1),
    backgroundColor: Colors.outlineVariant,
    marginVertical: moderateScaleVertical(10),
    width: moderateScale(80),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headinglineInner: {
    height: moderateScale(4),
    borderRadius: moderateScale(1),
    backgroundColor: Colors.primary,
    width: moderateScale(35),
  }
});

export default HeadingLine;
