import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, IconButton } from 'react-native-paper';
import { Colors } from '../resources';
import { moderateScale } from '../_helpers';

const ModelWithClose = ({ visible, onDismiss, children, style }) => {
    return (
        <Modal visible={visible} onDismiss={onDismiss}>
            <View style={[styles.container, style]}>
                <IconButton
                    icon="close"
                    size={24}
                    onPress={onDismiss}
                    style={styles.closeButton}
                />
                {children}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        padding: moderateScale(20),
        margin: moderateScale(20),
        borderRadius: moderateScale(10),
    },
    closeButton: {
        position: 'absolute',
        right: moderateScale(5),
        top: moderateScale(5),
        zIndex: 1,
    }
});

export default ModelWithClose;
