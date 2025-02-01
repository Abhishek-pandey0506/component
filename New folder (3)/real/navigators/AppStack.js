import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ROUTE_NAME} from '../utils';
import { ForgotPassword, GettingStartedScreen, Home, PropertyDetails, SearchScreen, SignIn, SignUp, SplashScreen, SuggestionScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import { RollInLeft } from 'react-native-reanimated';
import { CustomTab } from '../components';

const TabNavigator = () => (
  <Tab.Navigator tabBar={props => <CustomTab {...props} />} screenOptions={{ headerShown: false }} >
    <Tab.Screen name={ROUTE_NAME.HOME} component={Home} />
    <Tab.Screen name={ROUTE_NAME.SEARCH} component={SearchScreen} />
    <Tab.Screen name={ROUTE_NAME.GETTING_STARTED} component={GettingStartedScreen} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }} >
    <Drawer.Screen name={ROUTE_NAME.DASHBOARD} component={TabNavigator} />
    <Drawer.Screen name={ROUTE_NAME.SEARCH} component={SearchScreen} />
    <Drawer.Screen name={ROUTE_NAME.GETTING_STARTED} component={GettingStartedScreen} />
  </Drawer.Navigator>
);

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE_NAME.SPLASH}>
      <Stack.Screen name={ROUTE_NAME.SPLASH} component={SplashScreen} />
      <Stack.Screen name={ROUTE_NAME.SUGGESTION} component={SuggestionScreen} />
      <Stack.Screen name={ROUTE_NAME.SIGNIN} component={SignIn} />
      <Stack.Screen name={ROUTE_NAME.SIGNUP} component={SignUp} />
      <Stack.Screen name={ROUTE_NAME.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTE_NAME.PROPERTY_DETAILS} component={PropertyDetails} />
      <Stack.Screen name={ROUTE_NAME.HOME_STACK} component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AppStack;
