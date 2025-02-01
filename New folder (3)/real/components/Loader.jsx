import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import { moderateScale, moderateScaleVertical } from '../utils';

const Loader = ({visible}) => (
  <Modal
    transparent={true}
    animationType="none"
    visible={visible}
    onRequestClose={() => {}}
    >
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        {/* <Image source={Images.loader} /> */}
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#081f69b0',
  },
  activityIndicatorWrapper: {
    height: moderateScaleVertical(100),
    width: moderateScale(100),
    borderRadius: moderateScale(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
