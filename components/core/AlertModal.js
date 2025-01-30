import React from 'react';
import {View, Modal, Image, StyleSheet} from 'react-native';
import {Button, CustomText} from '../../components';
import { Colors } from '../../resources';
import {  moderateScale, moderateScaleVertical, textScale } from '../../_helpers';


const AlertModal = ({visible, image, title, description, onCancel, onOkay}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {image && <Image source={image} style={styles.image} />}
          <CustomText style={styles.title}>{title || 'Alert'}</CustomText>
          <CustomText style={styles.description}>
            {description || ''}
          </CustomText>
          <View style={styles.buttonContainer}>
            {onOkay && (
              <Button
                style={styles.button}
                title="OK"
                onPress={onOkay}
              />
            )}
            {onCancel && (
              <Button
                style={styles.button}
                title="Cancel"
                onPress={onCancel}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScaleVertical(22),
    backgroundColor: Colors.primary,
  },
  modalView: {
    width: '90%',
    margin: moderateScale(20),
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(20),
    padding: moderateScale(30),
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    marginBottom: moderateScale(15),
  },
  title: {
    fontSize: textScale(20),
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: moderateScale(10),
  },
  description: {
    fontSize: textScale(16),
    textAlign: 'center',
    marginBottom: moderateScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: moderateScale(10),
  },
  button: {
    borderRadius: moderateScale(50),
    paddingVertical: moderateScaleVertical(10),
    paddingHorizontal: moderateScale(50),
    backgroundColor: Colors.secondary,
    width: '100%',
    display: 'flex',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default AlertModal;
