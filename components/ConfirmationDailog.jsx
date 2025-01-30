import React from 'react';
import { StyleSheet } from 'react-native';
import { Portal, Dialog, Button, Text } from 'react-native-paper';
import { Colors, Fonts } from '../resources';
import { moderateScale } from '../_helpers';

const ConfirmationDialog = ({
  visible,
  onCancel,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmButtonColor = Colors.primary,
  cancelButtonColor = Colors.gray
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel} style={styles.dialog}>
        <Dialog.Title style={styles.title}>{title}</Dialog.Title>
        
        <Dialog.Content>
          <Text variant="bodyLarge" style={styles.message}>
            {message}
          </Text>
        </Dialog.Content>

        <Dialog.Actions style={styles.actions}>
          <Button
            mode="outlined"
            onPress={onCancel}
            textColor={cancelButtonColor}
            style={styles.button}
          >
            {cancelText}
          </Button>
          
          <Button
            mode="contained"
            onPress={onConfirm}
            buttonColor={confirmButtonColor}
            style={styles.button}
          >
            {confirmText}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialog: {
    borderRadius: moderateScale(10),
    backgroundColor: Colors.white,
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.bold,
  },
  message: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
  actions: {
    justifyContent: 'space-around',
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(10)
  },
  button: {
    minWidth: '40%'
  }
});

export default ConfirmationDialog;

