import React from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from '../resources';
import CustomIcon, { ICON_TYPE } from './CustomIcon';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheetModal = ({ visible, onClose, children, height = 0.3 }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.bottomSheet, { height: SCREEN_HEIGHT * height }]}>
              <View style={styles.header}>
                <TouchableOpacity  onPress={onClose}>
                  <CustomIcon 
                    name="close" 
                    origin={ICON_TYPE.MATERIAL_COMMUNITY}
                    size={24}
                    color={Colors.text}
                  />
                </TouchableOpacity>
              </View>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginBottom: 10
  }
});

export default BottomSheetModal;
