import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../resources';
import { moderateScale, textScale } from '../_helpers';
import CustomIcon, { ICON_TYPE } from './CustomIcon';
import { APP_ROLE, ROUTE_NAME } from '../_constant';
import { useSelector } from 'react-redux';



const userTabScreens = [
  {
    name: ROUTE_NAME.USER_DASHBOARD,
    title: 'Dashboard',
    icon: 'home',
    iconType: ICON_TYPE.FEATHER_ICONS,
  },
  {
    name: ROUTE_NAME.USER_CREATORS,
    title: 'Creators',
    icon: 'compass-outline',
    iconType: ICON_TYPE.ICONICONS,
  },
  {
    name: ROUTE_NAME.USER_MESSAGES,
    title: 'Messages',
    icon: 'send',
    iconType: ICON_TYPE.FEATHER_ICONS,
    // handlePress: () => // console.log('Messages Pressed'),
  },
  {
    name: ROUTE_NAME.USER_NOTIFICATIONS,
    title: 'Notifications',
    icon: 'bell',
    iconType: ICON_TYPE.FEATHER_ICONS,
    // handlePress: () => // console.log('Notifications Pressed'),
  },
];


const creatorTabScreens = [
  {
    name: ROUTE_NAME.CREATOR_DASHBOARD,
    title: 'Dashboard',
    icon: 'home',
    iconType: ICON_TYPE.FEATHER_ICONS,
  },
  {
    name: ROUTE_NAME.CREATOR_EXPLORE,
    title: 'Explore',
    icon: 'compass-outline',
    iconType: ICON_TYPE.ICONICONS,
  },
  {
    name: ROUTE_NAME.CREATOR_MESSAGES,
    title: 'Messages',
    icon: 'send',
    iconType: ICON_TYPE.FEATHER_ICONS,
  },
  {
    name: ROUTE_NAME.CREATOR_NOTIFICATIONS,
    title: 'Notifications',
    icon: 'bell',
    iconType: ICON_TYPE.FEATHER_ICONS,
  },
];


const CustomTabBar = ({ state, descriptors, navigation, }) => {
  const role = useSelector(state => state.auth.role);
  const tabScreens = role === APP_ROLE.CREATOR ? creatorTabScreens : userTabScreens;
  const renderIcon = (iconName, iconType, isFocused) => (
    <CustomIcon
      name={iconName}
      type={iconType}
      size={textScale(25)}
      color={isFocused ? Colors.white : Colors.black}
      origin={iconType}
    />
  );
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const tabConfig = tabScreens.find(tab => tab.name === route.name);

          const onPress = () => {
            if (tabConfig?.handlePress) {
              tabConfig.handlePress(navigation);
            } else {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (!tabConfig) return null;

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              style={isFocused ? styles.tabActive : styles.tab}>
              <View style={isFocused ? styles.activeTab : styles.inactiveTab}>
                {renderIcon(tabConfig.icon, tabConfig.iconType, isFocused)}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: Colors.white,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: moderateScale(70),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0,
    // borderRadius: moderateScale(50),
    width: '95%',
    marginHorizontal: 'auto',
    paddingHorizontal: moderateScale(20),
  },
  tab: {
    // paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(20),
    // backgroundColor: Colors.black,
  },
  tabActive: {
    // paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.primary,
  },
  inactiveTab: {
    height: moderateScale(50),
    width: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(50),
    width: moderateScale(50),
  },
  activeLabel: {
    color: Colors.white,
    fontSize: textScale(12),
    marginTop: moderateScale(4),
    borderRadius: moderateScale(20),
  },
});

export default CustomTabBar;
