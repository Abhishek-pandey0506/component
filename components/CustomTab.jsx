import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { Colors, ROUTE_NAME } from '../utils';

const CustomTab = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const iconName =
            route.name === ROUTE_NAME.HOME
              ? 'home'
              : route.name === ROUTE_NAME.SEARCH
              ? 'search'
              : route.name === ROUTE_NAME.GETTING_STARTED
              ? 'person'
              : 'menu';

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}>
              {isFocused ? (
                <View style={styles.activeTab}>
                  <Ionicons
                    name={iconName}
                    size={24}
                    color={Colors.white}
                  />
                  {/* <Text style={styles.activeLabel}>
                    {route.name === ROUTE_NAME.GETTING_STARTED ? 'Profile' : route.name}
                  </Text> */}
                </View>
              ) : (
                <View style={styles.inactiveTab}>
                  <Ionicons
                    name={iconName}
                    size={24}
                    color={Colors.onText}
                  />
                  {/* <Text style={styles.inactiveLabel}>
                    {route.name === ROUTE_NAME.GETTING_STARTED ? 'Profile' : route.name}
                  </Text> */}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          key={'more'}
          accessibilityRole="button"
          onPress={() => navigation.toggleDrawer()}
          style={styles.tab}>
          <View style={styles.inactiveTab}>
            <Ionicons name={'menu'} size={24} color={Colors.onText} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: Colors.background,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  inactiveTab: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  activeTab: {
    backgroundColor: Colors.onText,
    borderRadius: 20,
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 8,
    minWidth: 80,
  },
  activeLabel: {
    color: Colors.white,
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },
  inactiveLabel: {
    color: Colors.gray,
    fontSize: 12,
    marginTop: 4,
  }
});

export default CustomTab;