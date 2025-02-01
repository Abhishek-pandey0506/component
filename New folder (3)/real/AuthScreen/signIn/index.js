import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Text, TextInput, Checkbox, Surface, Icon, Divider } from 'react-native-paper';
import { FONTS, ROUTE_NAME, Colors, moderateScale, moderateScaleVertical, textScale } from '../../../utils';
import { Spacer, CustomIcon, SocialContainer, Heading } from '../../../components';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignIn = ({ navigation }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    // Handle sign in logic here
  };

  const handleSocialLogin = (provider) => {
    // Handle social login
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          source="chevron-left"
          size={moderateScale(34)}
          style={styles.backButton}
        />
      </TouchableOpacity>

      <Heading
        title="Ready to"
        subtitle="Sign In?"
        description="Welcome back, we missed you!"

      />

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <TextInput
              mode="outlined"
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              left={<TextInput.Icon icon="email" />}
              error={touched.email && errors.email}
              style={styles.input}
            />
            <Spacer height={15} />
            <TextInput
              mode="outlined"
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              left={<TextInput.Icon icon="lock" />}
              right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
              secureTextEntry={!showPassword}
              error={touched.password && errors.password}
              style={styles.input}
            />

            <View style={styles.forgotTermsContainer}>
              <Button
                onPress={() => navigation.navigate(ROUTE_NAME.FORGOT_PASSWORD)}
                mode="text"
              >
                Forgot Password?
              </Button>
            </View>

            <View style={styles.termsContainer}>
              <Checkbox.Android
                status={termsAccepted ? 'checked' : 'unchecked'}
                onPress={() => setTermsAccepted(!termsAccepted)}
              />
              <Text variant="bodyMedium">I agree to the</Text>
              <Button
                mode="text"
                compact
                onPress={() => navigation.navigate('Terms')}
              >
                Terms & Conditions
              </Button>
            </View>

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.signInButton}
            >
              Sign In
            </Button>

            <View style={styles.dividerContainer}>
              <Divider style={styles.divider} />
              <Text style={styles.orText}>OR LOGIN WITH</Text>
              <Divider style={styles.divider} />
            </View>

            <SocialContainer handleSocialLogin={handleSocialLogin} />
          </View>
        )}
      </Formik>

      <View style={styles.footerContainer}>
        <Text variant="bodyMedium">Don't have an account?</Text>
        <Button
          mode="text"
          onPress={() => navigation.navigate(ROUTE_NAME.SIGNUP)}
        >
          Register
        </Button>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(20),
    backgroundColor: Colors.background
  },
  backButton: {
    marginTop: moderateScaleVertical(20),
    alignSelf: 'flex-start',
  },
  headerContainer: {
    paddingVertical: moderateScaleVertical(20),
    paddingHorizontal: moderateScale(5)
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScaleVertical(-10)
  },
  heading: {
    fontSize: textScale(28),
    fontFamily: FONTS.regular
  },
  subHeading: {
    fontSize: textScale(28),
    fontFamily: FONTS.bold
  },
  subtitle: {
    opacity: 0.7,
    marginTop: moderateScaleVertical(5),
  },
  formContainer: {
    flex: 1,
  },
  input: {
    marginBottom: moderateScaleVertical(10),
    borderRadius: moderateScale(20),
  },
  forgotTermsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInButton: {
    marginVertical: moderateScaleVertical(25),
    borderRadius: moderateScale(8),
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScaleVertical(20),
  },
  divider: {
    flex: 1,
    height: 1,
  },
  orText: {
    marginHorizontal: moderateScale(10),
    color: Colors.outline,
    fontSize: textScale(14)
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScaleVertical(20),
  }
});
