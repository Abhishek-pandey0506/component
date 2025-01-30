import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Dropdown, MultiSelectDropdown, DropdownItemProps, DropdownInputProps } from 'react-native-paper-dropdown';
import { TextInput, Divider, TouchableRipple, Headline, useTheme } from 'react-native-paper';
import { Controller } from 'react-hook-form';


// Main CustomDropdown Component with React Hook Form's Controller
const CustomDropdown = ({ label, placeholder, options, name, control, rules, multiSelect = false }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={[styles.container, { borderColor: error ? theme.colors.error : theme.colors.background }]}>
          {multiSelect ? (
            <MultiSelectDropdown
              label={label}
              placeholder={placeholder}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={value}
              setValue={onChange}
              options={options}
              mode="outlined"
            //   CustomDropdownItem={CustomDropdownItem}
            //   CustomDropdownInput={CustomDropdownInput}
              menuContentStyle={styles.menuContent}
            />
          ) : (
            <Dropdown
              label={label}
              placeholder={placeholder}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={value}
              setValue={onChange}
              options={options}
              mode="flat"
            //   CustomDropdownItem={CustomDropdownItem}
            //   CustomDropdownInput={CustomDropdownInput}
              menuContentStyle={styles.menuContent}
            />
          )}
          {error && <Headline style={styles.error}>{error.message || 'This field is required'}</Headline>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  menuContent: {
    width: '100%',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default CustomDropdown;
