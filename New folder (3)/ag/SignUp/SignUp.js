import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Spacer from '../../../components/Spacer';
import {appString} from '../../../resources/appStrings';
import CustomButton from '../../../components/CustomButton';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../helper/responsiveSize';
import CustomIcon, {ICON_TYPE} from '../../../components/CustomIcon';
import CustomInput from '../../../components/CustomInput';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import NavigationService from '../../../navigation/NavigationService';
import {RouteName} from '../../../helper/strings';
import WrapperContainer from '../../../components/WrapperContainer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomStatusBar from '../../../components/CustomStatusBar';
import {colors} from '../../../resources/colors';
import CustomPostHeader from '../../../components/CustomPostHeader';
import CustomText from '../../../components/CustomText';
import CustomPicker from '../../../components/CustomPicker';
import countriesData from '../../../countries.json'
import { useDispatch } from 'react-redux';
import { userSignupAction } from '../../../../store/auth/auth.actions';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required.')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}(\.[A-Z]{2,})?$/i,
      'Invalid email format',
    )
    .email('Please enter a valid email.'),
  firstName: Yup.string()
    .required('First name is required.')
    .max(30, 'First name cannot exceed more than 30 characters.'),
  lastName: Yup.string()
    .required('Last name  is required.')
    .max(30, 'Last name cannot exceed more than 30 characters.'),
  password: Yup.string()
    .trim()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .max(15, ({max}) => `Password must not exceed ${max} characters`)
    .required('Required*')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*_])(?=.{8,})/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.',
    ),
  confirm_password: Yup.string()
    .required('Required*')
    .oneOf([Yup.ref('password')], 'Password does not match'),
  userPhone: Yup.string()
    .required('Phone number is required.')
    .min(10, ({min}) => `Phone number must be at least ${min} characters`)
    .max(12, ({max}) => `Phone number must not exceed ${max} characters`),
  brokeragePhone: Yup.string()
    .required('Brokerage Phone number is required.')
    .min(
      10,
      ({min}) => `Brokerage Phone number must be at least ${min} characters`,
    )
    .max(
      12,
      ({max}) => `Brokerage Phone number must not exceed ${max} characters`,
    ),
  license_number: Yup.string().required('license number is required.'),
  brokerageCompany: Yup.string()
    .required('Brokerage Company is required.')
    .max(20, 'Brokerage Company cannot exceed more than 20 characters.'),
  brokerageAddress: Yup.string()
    .required('Brokerage Address is required.')
    .max(30, 'Brokerage Address cannot exceed more than 30 characters.'),
  state: Yup.string()
    .required('state is required.')
    .max(30, 'state cannot exceed more than 30 characters.'),
  country: Yup.string()
    .required('country is required.')
    .max(30, 'country cannot exceed more than 30 characters.'),
});

const SignUp = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const countryList = countriesData.map(country => ({
      label: country.country,
      value: country.code,
    }));
    setCountries(countryList);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const selectedCountryData = countriesData.find(
        country => country.code === selectedCountry
      );
      const stateList = selectedCountryData
        ? selectedCountryData.states.map(state => ({
            label: state.state,
            value: state.code,
          }))
        : [];
      setStates(stateList);
    }
  }, [selectedCountry]);


  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    userPhone: '',
    brokeragePhone: '',
    license_number: '',
    brokerageCompany: '',
    brokerageAddress: '',
    state: '',
    country: '',
    password: '',
    confirm_password: '',
  };
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    resetForm,
    touched,
    setFieldValue,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    // validationSchema: validationSchema,
    onSubmit: async (val, {setErrors, setSubmitting}) => {
      console.log('val===>>>', val);
      const formvalues = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        real_estate_license_no: values.license_number,
        user_phone: values.userPhone,
        password: values.password,
        brokerage_phone: values.brokeragePhone,
        brokerage_company: values.brokerageCompany,
        brokerage_address: values.brokerageAddress,
        state: selectedState,
        county: selectedCountry,
      };
      console.log('values===>>', formvalues);
      dispatch(userSignupAction(formvalues))
    .unwrap()
    .then(() => {
      NavigationService.navigate(RouteName.SUBSCRIPTIONS);
    })
    .catch((error) => {
      console.error('Signup error:', error);
      Alert.alert(error || 'Signup failed');
    })
    .finally(() => {
      setSubmitting(false);
    })     
    },
  });

  return (
    <WrapperContainer>
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <CustomStatusBar backgroundColor={colors.Tertiary} />
        <CustomPostHeader
          title={'Create Account'}
          rightIconPress={() => console.log('pressed')}
          leftIconPress={() => NavigationService.goBack()}
          leftIcon={
            <CustomIcon
              name={'arrow-left'}
              origin={ICON_TYPE.FEATHER_ICONS}
              size={32}
              color={colors.White}
            />
          }
          rightIcon={
            <CustomIcon
              name={'menu'}
              origin={ICON_TYPE.MATERIAL_COMMUNITY}
              size={32}
              color={colors.White}
            />
          }
        />
        <Spacer height={moderateScale(10)} />
        <View style={{paddingHorizontal: 20}}>
          <CustomText text={'Create Your Account'} />
          <Spacer height={moderateScale(10)} />
          <Text style={styles.normalText}>
            This is the content description sentence.
          </Text>
          <Spacer height={moderateScale(15)} />
          <CustomInput
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Enter First Name"
            keyboardType="email-address"
            returnKeyType="next"
            label="First Name *"
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
            error={errors?.firstName && touched?.firstName}
            errorText={errors?.firstName}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.IONICONS}
                name="person-circle"
                color={colors.Dark}
                size={18}
              />
            }
          />
          <CustomInput
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Enter Last Name"
            keyboardType="email-address"
            returnKeyType="next"
            label="Last Name *"
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            error={errors?.lastName && touched?.lastName}
            errorText={errors?.lastName}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.IONICONS}
                name="person-circle"
                color={colors.Dark}
                size={18}
              />
            }
          />
          <CustomInput
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Enter Email Address"
            keyboardType="email-address"
            returnKeyType="next"
            label="Email *"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors?.email && touched?.email}
            errorText={errors?.email}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name="email"
                color={colors.Dark}
                size={18}
              />
            }
          />

          <CustomInput
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Enter User Phone Number"
            keyboardType="phone-pad"
            returnKeyType="next"
            label="User Phone Number"
            onChangeText={handleChange('userPhone')}
            onBlur={handleBlur('userPhone')}
            value={values.userPhone}
            error={errors?.userPhone && touched?.userPhone}
            errorText={errors?.userPhone}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.FONT_AWESOME}
                name="phone"
                color={'gray'}
                size={18}
              />
            }
          />

          <CustomInput
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Enter Brokerage Phone Number"
            keyboardType="phone-pad"
            returnKeyType="next"
            label="Brokerage Phone Number"
            onChangeText={handleChange('brokeragePhone')}
            onBlur={handleBlur('brokeragePhone')}
            value={values.brokeragePhone}
            error={errors?.brokeragePhone && touched?.brokeragePhone}
            errorText={errors?.brokeragePhone}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.FONT_AWESOME}
                name="phone"
                color={'gray'}
                size={18}
              />
            }
          />

          <CustomInput
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Your Number"
            keyboardType="numeric"
            returnKeyType="next"
            label="Real Estate License Number"
            onChangeText={handleChange('license_number')}
            onBlur={handleBlur('license_number')}
            value={values.license_number}
            error={errors?.license_number && touched?.license_number}
            errorText={errors?.license_number}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.FONT_AWESOME}
                name="drivers-license"
                color={colors.Dark}
                size={18}
              />
            }
          />
          <CustomInput
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Enter Brokerage Company"
            returnKeyType="next"
            label="Brokerage Company"
            onChangeText={handleChange('brokerageCompany')}
            onBlur={handleBlur('brokerageCompany')}
            value={values.brokerageCompany}
            error={errors?.brokerageCompany && touched?.brokerageCompany}
            errorText={errors?.brokerageCompany}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name="city-variant-outline"
                color={colors.Dark}
                size={18}
              />
            }
          />
          <CustomInput
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Enter Brokerage Address"
            returnKeyType="next"
            label="Brokerage Address"
            onChangeText={handleChange('brokerageAddress')}
            onBlur={handleBlur('brokerageAddress')}
            value={values.brokerageAddress}
            error={errors?.brokerageAddress && touched?.brokerageAddress}
            errorText={errors?.brokerageAddress}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.ENTYPO}
                name="address"
                color={colors.Dark}
                size={18}
              />
            }
          />

          {/* Country Dropdown */}
          <Text style={styles.label}>Select Country</Text>
          <CustomPicker
            items={countries}
            placeholder="Select Country"
            isSearchable={true}
            defaultValue={selectedCountry}
            onValueChange={item => setSelectedCountry(item.value)}
          />
          <Spacer height={moderateScale(20)} />
          {/* State Dropdown */}
          <Text style={styles.label}>Select State</Text>
          <CustomPicker
            items={states}
            placeholder="Select State"
            isSearchable={true}
            defaultValue={selectedState}
            onValueChange={item => setSelectedState(item.value)}
          />
          <Spacer height={moderateScale(20)} />

          <CustomInput
            secureTextEntry={true}
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Enter Password"
            returnKeyType="next"
            label="Create Password *"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errors?.password && touched?.password}
            errorText={errors?.password}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.IONICONS}
                name="lock-closed"
                color={colors.Dark}
                size={18}
              />
            }
          />
          <CustomInput
            secureTextEntry={true}
            lableStyle={styles.label}
            mode="outlined"
            placeholder="Enter Confirm Password"
            returnKeyType="next"
            label="Confirm Password *"
            onChangeText={handleChange('confirm_password')}
            onBlur={handleBlur('confirm_password')}
            value={values.confirm_password}
            error={errors?.confirm_password && touched?.confirm_password}
            errorText={errors?.confirm_password}
            leftIcon={
              <CustomIcon
                origin={ICON_TYPE.IONICONS}
                name="lock-closed"
                color={colors.Dark}
                size={18}
              />
            }
          />
          
          <Spacer height={moderateScale(10)} />
          <CustomButton
            disabled={!isValid || !Object.keys(touched).length}
            btnText={appString.SIGNUP}
            onPress={handleSubmit}
          />
          <Spacer height={moderateScale(20)} />
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  normalText: {
    fontSize: textScale(14),
    color: colors.Black,
  },
  label: {
    fontSize: textScale(14),
    fontWeight: '800',
    marginBottom: moderateScaleVertical(5),
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    fontSize: 16,
  },
  inputAndroid: {
    height: 50,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    fontSize: 16,
  },
  iconContainer: {
    top: 12,
    right: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default SignUp;
