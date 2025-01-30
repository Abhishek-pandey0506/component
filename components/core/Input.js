/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors, GlobalStyles } from '../../resources';
import { textScale, moderateScale, moderateScaleVertical } from '../../_helpers';
import CustomIcon, { ICON_TYPE } from '../CustomIcon';

const Input = ({
  name,
  control,
  placeholder ,
  onChangeText,
  secureTextEntry = false,
  leftIcon,
  iconType= ICON_TYPE.FEATHER_ICONS,
  iconStyle,
  ...rest 
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const toggleSecureTextEntry = () => {
    setIsSecure(prevState => !prevState);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            {leftIcon && (
              <View style={styles.leftIcon}>
                <CustomIcon
                  name={leftIcon}
                  size={textScale(20)}
                  color={Colors.darkGray}
                  origin={iconType}
                  iconStyle={iconStyle}
                />
              </View>
            )}
            <TextInput
              style={[styles.input, leftIcon && styles.inputWithLeftIcon]}
              placeholderTextColor={Colors.placeholder}
              placeholder={placeholder}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              secureTextEntry={isSecure}
              {...rest}
            />
            {secureTextEntry && (
              <TouchableOpacity
                style={styles.rightIcon}
                onPress={toggleSecureTextEntry}>
                <CustomIcon
                  name={!isSecure ? 'eye' : 'eye-off'}
                  size={textScale(20)}
                  color={Colors.darkGray}
                  origin={ICON_TYPE.FEATHER_ICONS}
                />
              </TouchableOpacity>
            )}
          </View>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    paddingVertical: moderateScaleVertical(10),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: moderateScale(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: moderateScale(50),
    fontSize: textScale(13),
    color: Colors.text,
    paddingHorizontal: moderateScale(10),
  },
  inputWithLeftIcon: {
    paddingLeft: moderateScale(40),
  },
  leftIcon: {
    position: 'absolute',
    left: moderateScale(10),
    zIndex: 1,
  },
  rightIcon: {
    position: 'absolute',
    right: moderateScale(15),
  },
  errorText: {
    marginTop: moderateScaleVertical(5),
    fontSize: textScale(12),
    marginLeft: moderateScale(10),
    color: Colors.danger,
  },
});
