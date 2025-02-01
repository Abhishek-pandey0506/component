import {View, Image, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import {images} from '../../resources/images';
import {colors} from '../../resources/colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import { useDispatch } from 'react-redux';
import { stayLoginAction, userAccountAction } from '../../../store/auth/auth.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    userDetails();
  }, []);

async function userDetails() {
  try {
    const userToken = await AsyncStorage.getItem('TOKEN');
  
    console.log('userToken==>>', userToken);

    if (userToken) {
      dispatch(stayLoginAction());
      dispatch(userAccountAction());
    }
  } catch (error) {
    console.error('Error fetching data from AsyncStorage', error);
  }
}

  return (
    <>
      <CustomStatusBar backgroundColor={colors.Tertiary} />
      <View style={styles.container}>
        <Image source={images.Splash} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Tertiary,
  },
});

export default Splash;
