import React from 'react';
import { View, StyleSheet, Image, Share, TextInput, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Colors, Images } from '../resources';
import { CustomDrawerItem, Button } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../_store/_reducers/auth';
import { moderateScale, moderateScaleVertical } from '../_helpers';
import { ROUTE_NAME, APP_ROLE } from '../_constant';
import CustomIcon, { ICON_TYPE } from './CustomIcon';
import NavigationService from '../_services/navigation.service';


const userDrawerScreens = [
  {
    name: ROUTE_NAME.HOME,
    options: { headerShown: false },
    title: 'Home',
    icon: 'home',
    iconType: ICON_TYPE.FEATHER_ICONS,
    // onPress: () => // console.log('Home Pressed'),
    options: {},
  },
  {
    name: ROUTE_NAME.USER_PROFILE,
    title: 'Profile',
    icon: 'user-circle-o',
    iconType: ICON_TYPE.FONT_AWESOME,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.USER_BOOKMARK,
    title: 'Bookmark',
    icon: 'bookmark',
    iconType: ICON_TYPE.FEATHER_ICONS,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.USER_LIKES,
    title: 'Likes',
    icon: 'heart',
    iconType: ICON_TYPE.FEATHER_ICONS,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.USER_WALLET,
    title: 'Wallet : $0.00',
    icon: 'wallet-outline',
    iconType: ICON_TYPE.ICONICONS,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.USER_SUBSCRIPTIONS,
    title: 'My subscriptions',
    icon: 'user-check',
    iconType: ICON_TYPE.FEATHER_ICONS,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.USER_PURCHASES,
    title: 'Purchased',
    icon: 'bag-check-outline',
    iconType: ICON_TYPE.ICONICONS,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.USER_BECOME_CREATER,
    title: 'Be a creator!',
    icon: 'star',
    iconType: ICON_TYPE.FEATHER_ICONS,
    options: { headerShown: false },
  },
];


const creatorDrawerScreens = [
  {
    name: ROUTE_NAME.HOME,
    options: { headerShown: false },
    title: 'Home',
    icon: 'home',
    iconType: ICON_TYPE.FEATHER_ICONS,
    // onPress: () => // console.log('Home Pressed'),
    options: {},
  },
  {
    name: ROUTE_NAME.CREATOR_PROFILE,
    title: 'Profile',
    icon: 'user-circle-o',
    iconType: ICON_TYPE.FONT_AWESOME,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.CREATOR_BOOKMARK,
    title: 'Bookmark',
    icon: 'bookmark',
    iconType: ICON_TYPE.FEATHER_ICONS,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.CREATOR_LIKES,
    title: 'Likes',
    icon: 'heart',
    iconType: ICON_TYPE.FEATHER_ICONS,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.CREATOR_WALLET,
    title: 'Wallet : $0.00',
    icon: 'wallet-outline',
    iconType: ICON_TYPE.ICONICONS,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.CREATOR_SUBSCRIPTIONS,
    title: 'My subscriptions',
    icon: 'user-check',
    iconType: ICON_TYPE.FEATHER_ICONS,
    options: { headerShown: false },
  },
  {
    name: ROUTE_NAME.CREATOR_PURCHASES,
    title: 'Purchased',
    icon: 'bag-check-outline',
    iconType: ICON_TYPE.ICONICONS,
    options: { headerShown: false },
  },

];

const DrawerContent = (props) => {
  const { navigation, state } = props;
  const dispatch = useDispatch()
  // console.log(state)
  const role = useSelector(state => state.auth.role);
  const drawerScreens = role === APP_ROLE.CREATOR ? creatorDrawerScreens : userDrawerScreens;

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <DrawerContentScrollView style={styles.drawerScrollView}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <CustomIcon
            origin={ICON_TYPE.MATERIAL_COMMUNITY}
            name={'close'}
            size={35}
            color={Colors.gray}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Find a creator"
            placeholderTextColor={Colors.placeholderText}
          />
          <CustomIcon
            origin={ICON_TYPE.FONT_AWESOME}
            name="search"
            size={20}
            color={Colors.gray}
            style={styles.searchIcon}
          />
        </View>
        {drawerScreens.map((screen, index) => (
          <CustomDrawerItem
            key={index}
            title={screen.title}
            icon={screen.icon}
            iconType={screen.iconType}
            isActive={state.index === index}
            onPress={() => {
              if (screen.onPress) {
                screen.onPress();
              } else {
                NavigationService.navigate(screen.name);
              }
            }}
          />
        ))}
      </DrawerContentScrollView>
      <View style={styles.logoutButtonContainer}>
        <Button title="Logout"  style={styles.logoutButton} onPress={handleLogout}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  drawerScrollView: {
    backgroundColor: Colors.white,
  },
  closeIcon: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(20),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(10),
    marginTop: moderateScaleVertical(60),
    marginBottom: moderateScaleVertical(20),
    height: moderateScale(50),
  },
  searchInput: {
    flex: 1,
    paddingVertical: moderateScaleVertical(8),
    paddingHorizontal: moderateScale(10),
    color: Colors.text,
    fontSize: moderateScale(16),
    borderRadius: moderateScale(10),
  },
  searchIcon: {
    marginLeft: moderateScale(10),
  },
  drawerHeader: {
    alignItems: 'center',
    marginVertical: moderateScaleVertical(30),
  },
  profileImage: {
    width: moderateScale(80),
    height: moderateScale(80),
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: moderateScale(10),
    backgroundColor: Colors.dark,
  },
  logoutButton: {
    backgroundColor: Colors.primary,
    width: '100%',
  },
});

export default DrawerContent;
