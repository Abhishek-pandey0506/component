// Toast.js
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { moderateScale, moderateScaleVertical, textScale } from '../../_helpers';
import { Colors } from '../../resources';

const { width } = Dimensions.get('window');

const Toast = ({
  visible,
  message,
  description,
  duration = 3000,
  onHide,
  type = 'success',
}) => {
  const [show, setShow] = useState(visible);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(width)).current;

  const animateToast = (toValue, callback) => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: toValue,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: toValue === 1 ? 0 : width,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(callback);
  };

  useEffect(() => {
    if (visible) {
      setShow(true);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        hideToast();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      hideToast();
    }
  }, [visible, duration]);

  const hideToast = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShow(false);
      if (onHide) onHide();
    });
  };

  if (!show) return null;

  const getIconName = () => {
    switch (type) {
      case 'success':
        return 'checkmark-circle-outline';
      case 'info':
        return 'information-circle-outline';
      case 'error':
        return 'close-circle-outline';
      default:
        return 'alert-circle-outline';
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return Colors.success;
      case 'info':
        return Colors.info;
      case 'error':
        return Colors.danger;
      default:
        return Colors.warning;
    }
  };

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
          backgroundColor: getBackgroundColor(),
        },
      ]}>
      <View style={styles.toastContent}>
        <Icon
          size={moderateScale(24)}
          color={Colors.white}
          name={getIconName()}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.message}>{message}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: moderateScaleVertical(20),
    right: 0,
    width: '90%',
    borderTopLeftRadius: moderateScale(8),
    borderBottomLeftRadius: moderateScale(8),
    padding: moderateScale(12),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  toastContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: moderateScale(12),
  },
  textContainer: {
    flex: 1,
  },
  message: {
    color: Colors.white,
    fontSize: textScale(16),
    fontWeight: 'bold',
  },
  description: {
    color: Colors.white,
    fontSize: textScale(14),
    marginTop: moderateScaleVertical(4),
  },
});

export default Toast;
