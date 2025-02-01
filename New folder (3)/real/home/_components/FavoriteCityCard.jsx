import React from 'react';
import { View, ImageBackground, Text, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-paper';
import { SectionHeading } from '../../../components';
import { Colors, FONTS, moderateScale, textScale, moderateScaleVertical } from '../../../utils';

const FavoriteCityCard = ({ data, title }) => (
  <View>
    <SectionHeading title={title} />
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item: city }) => (
        <View key={city.id} style={styles.cityCard}>
          <ImageBackground source={city.image} style={styles.cityImage} imageStyle={styles.cityImage}>
            <View style={styles.overlay}>
              <Text style={styles.cityName}>{city.name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(2) }}>
                <Text style={styles.propertiesCount}>{city.propertiesCount} properties</Text>
                <Icon source="arrow-top-right" size={16} color={Colors.primary} />
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      style={styles.scrollView}
    />
  </View>
);

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: moderateScale(20),
  },
  cityCard: {
    margin: moderateScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  cityImage: {
    width: moderateScale(120),
    height: moderateScale(160),
    borderRadius: moderateScale(10),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'flex-start',
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },
  cityName: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: textScale(14),
    color: Colors.onText, // Updated to use Colors.text
  },
  propertiesCount: {
    textAlign: 'left',
    fontFamily: FONTS.regular,
    fontSize: textScale(10),
    color: Colors.onText, // Updated to use Colors.text
  },
});

export default FavoriteCityCard;