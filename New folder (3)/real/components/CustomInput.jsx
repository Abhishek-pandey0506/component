import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomInput = ({ 
    placeholder,
    value,
    onChangeText,
    leftIconName,
    isPassword,
    ...props
  }) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(isPassword);

    const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
    };

    return (
      <View style={styles.inputContainer}>
        {leftIconName && (
          <Icon
            name={leftIconName}
            size={24}
            color="#8F9BB3"
            style={styles.leftIcon}
          />
        )}
        
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={styles.input}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity onPress={toggleSecureEntry}>
            <Icon
              name={secureTextEntry ? 'visibility-off' : 'visibility'}
              size={24}
              color="#8F9BB3"
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 56,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingVertical: 12,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  }
});

export default CustomInput;