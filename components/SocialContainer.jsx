  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { Surface, Text, Icon } from 'react-native-paper';
  import { Colors, moderateScale, moderateScaleVertical, textScale } from '../utils';

  const SocialContainer = ({ handleSocialLogin = () => {} }) => {
    return (
      <View style={styles.socialContainer}>
        <Surface 
          elevation={0}
          style={styles.socialButton}
          onTouchEnd={() => handleSocialLogin('google')}
        >
          <View style={styles.socialButtonContent}>
            <Icon source="google" size={moderateScale(24)} />
            <Text style={styles.socialButtonText}>Google</Text>
          </View>
        </Surface>
        <Surface
          elevation={0}
          style={styles.socialButton}
          onTouchEnd={() => handleSocialLogin('facebook')}
        >
          <View style={styles.socialButtonContent}>
            <Icon source="facebook" size={moderateScale(24)} />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </View>
        </Surface>
      </View>
    );
  };

  const styles = StyleSheet.create({
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: moderateScaleVertical(5)
    },
    socialButton: {
      width: '48%',
      borderRadius: moderateScale(8),
      borderWidth: 1,
      borderColor: Colors.outlineVariant
    },
    socialButtonContent: {
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center',
      padding: moderateScale(12)
    },
    socialButtonText: {
      marginLeft: moderateScale(8),
      fontSize: textScale(16)
    }
  });

  export default SocialContainer;