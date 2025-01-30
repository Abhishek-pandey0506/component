import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import CustomIcon from './CustomIcon';
import { Colors, Fonts} from '../resources';
import { moderateScale, moderateScaleVertical, textScale } from '../_helpers';

const CustomDrawerItem = ({icon, iconType, title, onPress, isActive = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isActive && styles.activeContainer,
      ]}>
      {isActive ? (
        <View style={styles.activeContent}>
          {icon && <CustomIcon origin={iconType} name={icon} size={25} color={Colors.white} />}
          <Text style={styles.activeText}>{title}</Text>
        </View>
      ) : (
        <>
          {icon && <CustomIcon origin={iconType} name={icon} size={20} color={Colors.gray} />}
          <Text style={styles.text}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(12),
    // marginVertical: moderateScaleVertical(5),
    borderTopLeftRadius: moderateScale(50),
    borderBottomLeftRadius: moderateScale(50),
  },
  activeContainer: {
    backgroundColor: Colors.primary,
    paddingRight: moderateScale(30),
  },
  activeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: textScale(16),
    color: Colors.text,
    fontFamily: Fonts.medium,
    marginLeft: moderateScale(10),
  },
  activeText: {
    fontSize: textScale(16),
    color: Colors.white,
    fontFamily: Fonts.medium,
    marginLeft: moderateScale(10),
  },
});

export default CustomDrawerItem;
