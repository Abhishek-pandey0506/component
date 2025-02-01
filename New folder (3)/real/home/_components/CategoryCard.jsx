import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { SectionHeading } from '../../../components';
import { Colors, FONTS, moderateScale, textScale, moderateScaleVertical } from '../../../utils';


const CategoryCard = ({ data }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => (
        <View style={styles.categoryContainer}>
          <View style={styles.categoryCircle}>
            <IconButton icon={item.icon} size={moderateScale(31)} iconColor={Colors.background} />
          </View>
          <Text style={styles.categoryText}>{item.label}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: moderateScale(20),
  },
  contentContainer: {
    // paddingHorizontal: moderateScale(11),
  },
  categoryContainer: {
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  categoryCircle: {
    width: moderateScale(75),
    height: moderateScale(75),
    borderRadius: moderateScale(40),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    marginTop: moderateScale(5),
    fontFamily: 'FONTS.regular',
    fontSize: moderateScale(12),
    color: Colors.text,
  },
});

export default CategoryCard;
