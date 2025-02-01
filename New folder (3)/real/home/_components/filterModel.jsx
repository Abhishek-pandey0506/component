import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Modal, Portal, Button, Text, IconButton, Chip } from 'react-native-paper';
import { SectionHeading } from '../../../components';
import { Colors, FONTS, moderateScale, textScale, moderateScaleVertical } from '../../../utils';

const { width, height } = Dimensions.get('window');

const FilterModal = ({ visible, onDismiss }) => {
  const [selectedFilter, setSelectedFilter] = useState('Rent');

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.bottomSheetContainer}
        animationType="slide"
      >
        <View style={styles.dragIndicator} />
        <View style={styles.header}>
          <Text style={styles.title}>Filter Properties</Text>
          <IconButton icon="close" size={moderateScale(24)} onPress={onDismiss} />
        </View>
        <View style={styles.filterOptionsTop}>
          {['Rent', 'Buy', 'Builder'].map((filter) => (
            <Chip
              key={filter}
              selected={selectedFilter === filter}
              onPress={() => setSelectedFilter(filter)}
              style={[
                styles.chip,
                selectedFilter === filter && styles.selectedChip
              ]}
              selectedColor={Colors.primary}
            >
              {filter}
            </Chip>
          ))}
        </View>
        <Button mode="contained" onPress={onDismiss} style={styles.applyButton}>
          Apply Filters
        </Button>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: Colors.background,
    padding: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    alignSelf: 'center',
    width: width,
    height: height * 0.6,
    elevation: 5,
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 0,
  },
  dragIndicator: {
    width: moderateScale(40),
    height: moderateScale(5),
    backgroundColor: Colors.outline,
    borderRadius: moderateScale(2.5),
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScaleVertical(15),
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: textScale(20),
    color: Colors.primary,
  },
  filterOptionsTop: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: moderateScaleVertical(25),
  },
  chip: {
    marginHorizontal: moderateScale(5),
    borderWidth: 1,
    borderColor: Colors.outline,
  },
  selectedChip: {
    backgroundColor: Colors.primaryLight,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(12),
    paddingVertical: moderateScaleVertical(10),
  },
});

export default FilterModal;
