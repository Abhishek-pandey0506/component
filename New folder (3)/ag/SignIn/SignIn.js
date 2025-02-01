import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {images} from '../../../resources/images';
import WrapperContainer from '../../../components/WrapperContainer';
import {colors} from '../../../resources/colors';
import CustomInput from '../../../components/CustomInput';
import CustomIcon, {ICON_TYPE} from '../../../components/CustomIcon';
import Spacer from '../../../components/Spacer';
import NavigationService from '../../../navigation/NavigationService';
import {RouteName} from '../../../helper/strings';
import CustomButton from '../../../components/CustomButton';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../helper/responsiveSize';
import CustomStatusBar from '../../../components/CustomStatusBar';
import CustomText from '../../../components/CustomText';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import { userAccountAction, userSignInAction } from '../../../../store/auth/auth.actions';
import { authService } from '../../../services/auth.service';
import { login } from '../../../store/reducer/auth';

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}(\.[A-Z]{2,})?$/i,
      'Invalid email format',
    )
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])/,
      'Password must contain at least one lowercase letter',
    )
    .matches(
      /^(?=.*[A-Z])/,
      'Password must contain at least one uppercase letter',
    )
    .matches(/^(?=.*[0-9])/, 'Password must contain at least one number')
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      'Password must contain at least one special character',
    )
    .matches(/^(?=.{8,})/, 'Password must be at least 8 characters long'),
});

const SignIn = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [deviceId, setDeviceId] = useState('');
  const dispatch = useDispatch();
 
  const getDeviceInfo = async () => {
    const device = await DeviceInfo.getUniqueId();
    setDeviceId(device);
    const isauth = await AsyncStorage.getItem('IS_AUTHENTICATE');
    console.log(isauth)
  };

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    getDeviceInfo();
  }, []);

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    // validationSchema: validationSchema,
    onSubmit: async (val, {setErrors}) => {
      try {
        const formData = {
          username: values.email,
          password: values.password,
          device_id: deviceId,
          platform: Platform.OS === 'android' ? 'android' : 'ios',
          fcm_token: 'fcmToken',
          timezone: timezone,
        };
        const response = await authService.SignIn(formData)
        const result = response.data;
        console.log(result, "login user details")
        if(result.token){
          dispatch(login(result))
          showToast('Login Successful!');
          NavigationService.navigate(RouteName.POST_LOGIN);
        }
        // dispatch(userSignInAction(formData)).then(resp => {
        //   if (resp?.type?.includes('rejected')) {
        //     Alert.alert('Error', resp?.payload?.message || 'An error occurred.');
        //   } else {
        //     showToast('Login Successful!');
        //     dispatch(userAccountAction());
        //     NavigationService.navigate(RouteName.POST_LOGIN);
        //   }
        // });
      } catch (error) {
        console.log(error, "error")
        const msg = error?.response?.data?.message || 'Something went wrong. Please try again.';
        Alert.alert('Error',msg );
      }
    },
  });

  

  return (
    <WrapperContainer>
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <CustomStatusBar backgroundColor={colors.Tertiary} />
        <Image style={styles.image} source={images.logo} />
        <View style={styles.headerText}>
          <CustomText text={'Get Started.'} />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.normalText}>Sign In to your account below.</Text>
        </View>
        <View style={styles.headerInput}>
        <Text style={styles.label}>Email Address</Text>

          <CustomInput
            mode="outlined"
            placeholder="Enter Email Address"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors?.email && touched?.email}
            errorText={errors?.email}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name="email"
                color={'gray'}
                size={18}
              />
            }
          />
          <Text style={styles.label}>Password</Text>

          <CustomInput
            secureTextEntry={true}
            mode="outlined"
            placeholder="Enter Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values?.password}
            error={errors?.password && touched?.password}
            errorText={errors?.password}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.IONICONS}
                name="lock-closed"
                color={'gray'}
                size={18}
              />
            }
          />

          <Spacer height={moderateScaleVertical(10)} />
          <View style={styles.row}>
            <Pressable
              onPress={() => {
                setIsChecked(!isChecked);
              }}
              style={styles.checkboxRow}>
              <CustomIcon
                name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                color={isChecked ? colors.Primary : 'gray'}
              />
              <Text style={styles.checkboxText}>Remember me</Text>
            </Pressable>
            <Text
              style={styles.link}
              onPress={() => {
                NavigationService.navigate(RouteName.RESETPASS);
              }}>
              Forgot Password?
            </Text>
          </View>

          <Spacer height={moderateScaleVertical(20)} />

          <CustomButton
            disabled={!isValid || !Object.keys(touched).length}
            btnText={'Sign In'}
            onPress={handleSubmit}
          />

          <Spacer height={moderateScale(20)} />
          <Text style={styles.signUpText}>New to Agreement Vault? </Text>
          <Text
            style={styles.signUp}
            onPress={() => {
              NavigationService.navigate(RouteName.SIGNUP);
            }}>
            SIGN UP TODAY
          </Text>

          <Spacer height={moderateScale(15)} />
          <View style={styles.row}>
            <Text
              style={styles.link}
              onPress={() => {
                NavigationService.navigate(RouteName.TERMS_AND_CONDITIONS);
              }}>
              Terms of Service
            </Text>
            <Text
              style={styles.link}
              onPress={() => {
                NavigationService.navigate(RouteName.PRIVACY_POLICY);
              }}>
              Privacy Policy
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: moderateScaleVertical(425),
    resizeMode: 'cover',
  },
  headerText: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScaleVertical(10),
  },
  headerInput: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(10),
  },
  normalText: {
    fontSize: textScale(14),
    color: colors.Black,
  },
  checkboxText: {
    fontSize: textScale(14),
    color: colors.Black,
    fontWeight: '600',
  },
  label: {
    fontSize: textScale(14),
    fontWeight: '900',
    marginBottom: moderateScaleVertical(5),
    color: colors.Black,
  },
  checkboxRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: moderateScaleVertical(20),
  },
  link: {
    color: colors.Secondary,
    fontSize: textScale(14),
    fontWeight: '600',
  },
  signUpText: {
    color: colors.Black,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: textScale(12),
  },
  signUp: {
    color: colors.Secondary,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: textScale(14),
  },
});

export default SignIn;


