import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Text, TextInput, Checkbox, Surface, Icon, Divider } from 'react-native-paper';
import { FONTS, ROUTE_NAME, Colors, moderateScale, moderateScaleVertical, textScale } from '../../../utils';
import { Spacer, CustomIcon, SocialContainer, Heading } from '../../../components';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
});

const SignUp = ({ navigation }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    // Handle sign up logic here
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
        title="Create"
        subtitle="Account"
        description="Join us and start your journey!"
      />

      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={SignUpSchema}
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
            <Spacer height={5} />
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
            <Spacer height={5} />
            <TextInput
              mode="outlined"
              label="Confirm Password"
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              left={<TextInput.Icon icon="lock" />}
              right={<TextInput.Icon icon={showConfirmPassword ? "eye-off" : "eye"} onPress={() => setShowConfirmPassword(!showConfirmPassword)} />}
              secureTextEntry={!showConfirmPassword}
              error={touched.confirmPassword && errors.confirmPassword}
              style={styles.input}
            />

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
              style={styles.signUpButton}
            >
              Sign Up
            </Button>

            <View style={styles.dividerContainer}>
              <Divider style={styles.divider} />
              <Text style={styles.orText}>OR SIGN UP WITH</Text>
              <Divider style={styles.divider} />
            </View>

            <SocialContainer handleSocialLogin={handleSocialLogin} />
          </View>
        )}
      </Formik>

      <View style={styles.footerContainer}>
        <Text variant="bodyMedium">Already have an account?</Text>
        <Button
          mode="text"
          onPress={() => navigation.navigate(ROUTE_NAME.SIGNIN)}
        >
          Sign In
        </Button>
      </View>
    </View>
  );
};

export default SignUp;

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
  formContainer: {
    flex: 1,
  },
  input: {
    marginBottom: moderateScaleVertical(10),
    borderRadius: moderateScale(20),
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpButton: {
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
