import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {isMountedRef, navigationRef} from '../services/navigation.service';
import { SplashScreen } from '../screens';
import AppStack from './AppStack';

const AppNavigator = () => {
  const [isSplash, setIsSplash] = useState(true);
  const loggedIn = useSelector(store => store.auth.loggedIn);
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      // linking={linking}
    >
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
