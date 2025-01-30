import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import CustomIcon from './CustomIcon'; // Assuming you have this
import { moderateScale, moderateScaleVertical, textScale } from '../_helpers';
import { Colors, Fonts } from '../resources';
import moment from 'moment';

const CustomDatePicker = ({
  name,
  control,
  placeholder = 'Select date',
  containerStyle = {},
  iconColor,
  label,
  labelStyle,
  icon,
  origin,
  iconBoxStyle,
  style = {},
  isDisabled = false,
  leftIcon,
  defaultValue,
  iconType,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const formatDate = (date) => {
    if (!date) return '';
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
          <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={() => !isDisabled && setOpen(true)}
            disabled={isDisabled}
          >
            {leftIcon && (
              <View style={styles.leftIconContainer}>
                <CustomIcon
                  name={leftIcon}
                  size={20}
                  color={iconColor || Colors.text}
                  origin={iconType}
                />
              </View>
            )}
            <Text style={[styles.dateText, isDisabled && styles.disabledText]}>
              {defaultValue ? defaultValue : 
               value ? value : 
               placeholder}
            </Text>
            {icon && (
              <View style={iconBoxStyle}>
                <CustomIcon
                  name={icon}
                  size={20}
                  color={iconColor || Colors.text}
                  origin={origin}
                />
              </View>
            )}
          </TouchableOpacity>

          <DatePicker
            modal
            mode="date"
            open={open}
            date={selectedDate || maxDate}
            maximumDate={maxDate}
            onConfirm={(date) => {
              setOpen(false);
              setSelectedDate(date);
              onChange(moment(date).format('MM/DD/YYYY'));
            }}
            onCancel={() => {
              setOpen(false);
            }}
            {...rest}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: moderateScaleVertical(50),
    paddingHorizontal: moderateScale(15),
  },
  label: {
    color: Colors.primary,
    fontSize: textScale(12),
    fontFamily: Fonts.bold,
    marginBottom: moderateScale(5),
  },
  dateText: {
    color: Colors.text,
    fontSize: textScale(14),
    fontFamily: Fonts.regular,
    flex: 1,
  },
  disabledText: {
    color: Colors.lightGray,
  },
  errorText: {
    color: Colors.error,
    fontSize: textScale(12),
    paddingLeft: moderateScale(5),
    fontFamily: Fonts.bold,
  },
  leftIconContainer: {
    marginRight: moderateScale(10),
  },
});
