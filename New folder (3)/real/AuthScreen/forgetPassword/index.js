import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInput, Icon } from 'react-native-paper';
import { FONTS, ROUTE_NAME, Colors, moderateScale, moderateScaleVertical, textScale } from '../../../utils';
import { Spacer, Heading } from '../../../components';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ForgotPassword = ({ navigation }) => {
  const handleSubmit = (values) => {
    console.log(values);
    // Handle password reset logic here
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
        title="Forgot"
        subtitle="Password?"
        description="Enter your email address and we'll send you instructions to reset your password."
      />

      <Formik
        initialValues={{ email: '' }}
        validationSchema={ForgotPasswordSchema}
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

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.resetButton}
            >
              Reset Password
            </Button>

            <View style={styles.footerContainer}>
              <Text variant="bodyMedium">Remember your password?</Text>
              <Button
                mode="text"
                onPress={() => navigation.navigate(ROUTE_NAME.SIGNIN)}
              >
                Sign In
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ForgotPassword;

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
  resetButton: {
    marginVertical: moderateScaleVertical(25),
    borderRadius: moderateScale(8),
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScaleVertical(20),
  }
});
