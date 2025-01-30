import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal, FlatList, TouchableOpacity, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import CustomIcon from '../CustomIcon';
import { Colors } from '../../resources';
import { moderateScale, moderateScaleVertical } from '../../_helpers';

const CustomPicker = ({ control, name, items = [], placeholder, isDisabled = false, defaultValue = '', leftIcon, iconType, isSearchable = true }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({ item, onChange }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                onChange(item.value);
                setModalVisible(false);
            }}
        >
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {leftIcon && (
                <CustomIcon
                    name={leftIcon}
                    origin={iconType}
                    size={20}
                    color={Colors.lightGray}
                />
            )}
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <View style={styles.pickerContainer}>
                        <TouchableOpacity
                            style={styles.pickerButton}
                            onPress={() => !isDisabled && setModalVisible(true)}
                        >
                            <Text>{value ? items.find(item => item.value == value)?.label : placeholder}</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                        >
                            <TouchableOpacity
                                style={styles.modalBackdrop}
                                activeOpacity={1}
                                onPress={() => setModalVisible(false)}
                            >
                                <View style={styles.modalView}>
                                    {isSearchable && 
                                        <TextInput
                                            style={styles.searchInput}
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChangeText={setSearchQuery}
                                        />
                                    }
                                    <FlatList
                                        data={filteredItems}
                                        renderItem={({ item }) => renderItem({ item, onChange })}
                                        keyExtractor={item => item.value.toString()}
                                    />
                                </View>
                            </TouchableOpacity>
                        </Modal>
                    </View>
                )}
                name={name}
                defaultValue={defaultValue}
            />
                 <CustomIcon
                    name={'chevron-down'}
                    origin={'Ionicons'}
                    size={17}
                    color={Colors.lightGray}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight:moderateScale(45),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: moderateScale(5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: moderateScale(10),
        marginTop: moderateScaleVertical(10),
        marginBottom: moderateScaleVertical(10),
    },
    pickerContainer: {
        flex: 1,
    },
    pickerButton: {
        padding: 10,
        // borderColor: Colors.lightGray,
        // borderWidth: 1,
        // borderRadius: 5,
    },
    modalBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '90%',
        marginVertical: moderateScaleVertical(50),
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: moderateScaleVertical(25),
        paddingHorizontal: moderateScale(15),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    searchInput: {
        height: 40,
        borderColor: Colors.lightGray,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGray,
    },
});

export default CustomPicker;
