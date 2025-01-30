import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { getAuth } from '../_store/_reducers/auth';
import { moderateScale, moderateScaleVertical, textScale } from '../_helpers';
import { Colors, Images } from '../resources';
import CustomIcon, { ICON_TYPE } from './CustomIcon';

const CustomHeader = ({ title, showDrawer, showBack, navigation }) => {
  const { avatar, loggedIn } = useSelector(getAuth);

  return (
    <View style={styles.header}>
      {showBack && (
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => navigation.goBack()}>
          <Icons name={'long-arrow-left'} size={textScale(20)} color={Colors.white} />
        </TouchableOpacity>
      )}
      <Image source={Images.logo} style={{ height: moderateScale(60), width: moderateScale(130) }} resizeMode='contain' />

      {/* {title && (
        <View style={{ paddingLeft: moderateScale(20) }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )} */}
      {showDrawer && (
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => navigation.toggleDrawer()}>
         <CustomIcon name={'menu'} size={textScale(25)} color={Colors.black} origin={ICON_TYPE}/>
        </TouchableOpacity>
      )}
      {/* {loggedIn && (
        <View
          style={{
            flexDirection: 'row',
            gap: moderateScale(20),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('notification')}>
            <Ionicons name={'notifications'} size={textScale(20)} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('profile')}>
            {avatar ? (
              <Image
                source={Images.avatar}
                style={{ height: moderateScale(25), width: moderateScale(25), borderRadius: 50 }}
              />
            ) : (
              <Icons name={'user'} size={textScale(20)} color={Colors.white} />
            )}
          </TouchableOpacity>
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: moderateScaleVertical(60),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: moderateScale(20),

    backgroundColor: Colors.white, // Placeholder color, adjust as needed
  },
  title: {
    fontSize: textScale(20),
    color: Colors.black,
  },
  iconButton: {
    height: moderateScale(30),
    width: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(3),
    borderRadius: moderateScale(50),
    backgroundColor: Colors.black, // Placeholder color, adjust as needed
  },
  leftButton: {
    paddingTop: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    borderBottomRightRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
    backgroundColor: Colors.white, // Placeholder color, adjust as needed
  },
  activeText: {
    color: Colors.white,
    fontSize: textScale(12),
    fontWeight: 'bold',
  },
  inActiveText: {
    color: Colors.black,
    fontSize: textScale(12),
    fontWeight: 'bold',
  },
});

export default CustomHeader;
