import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Colors, FONTS, textScale, moderateScale, moderateScaleVertical } from '../utils';

const Heading = ({
  title,
  subtitle,
  description,
  headingStyle,
  subtitleStyle,
  descriptionStyle,
  containerStyle,
  wrapperStyle
}) => {
  return (
    <View style={[styles.headingContainer, containerStyle]}>
      <View style={[styles.headingWrapper, wrapperStyle]}>
        <Text variant="displayLarge" style={[styles.heading, headingStyle]}>
          {title}{' '}
        </Text>
        {subtitle && (
          <Text variant="headlineMedium" style={[styles.subHeading, subtitleStyle]}>
            {subtitle}
          </Text>
        )}
        {description && (
          <Text style={[styles.description, descriptionStyle]}>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    // paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(10),
    marginVertical: moderateScaleVertical(5)
  },
  headingWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  heading: {
    fontSize: textScale(28),
    fontFamily: FONTS.regular,
    color: Colors.text,
  },
  subHeading: {
    fontSize: textScale(26),
    fontFamily: FONTS.bold,
    color: Colors.text,
  },
  description: {
    fontSize: textScale(14),
    fontFamily: FONTS.regular,
    color: Colors.text,
    width: '100%',
    marginTop: moderateScaleVertical(-7)
  }
});

export default Heading;
