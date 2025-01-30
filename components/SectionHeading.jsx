import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Colors, FONTS, moderateScale, moderateScaleVertical, textScale } from '../utils';
import HeadingLine from './HeadingLine';

const SectionHeading = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="titleMedium" style={styles.title}>{title}</Text>
      <Text variant="bodyMedium" style={styles.seeAll}>See All</Text>
    </View>
      <HeadingLine />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
    marginVertical: moderateScaleVertical(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: textScale(18),
    color: Colors.text,
  },
  seeAll: {
    color: Colors.primary,
    fontFamily: FONTS.semiBold,
  },
});

export default SectionHeading;
