import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Chip, Icon } from 'react-native-paper';
import { SectionHeading } from '../../../components';
import { Colors, FONTS, moderateScale, textScale, moderateScaleVertical } from '../../../utils';

const NewPropertyCard = ({ data, styleOverrides = {}, title, onPress }) => (
  <View style={styles.container}>
    <SectionHeading title={title} />
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => (
        <Card key={item.id} style={[styles.propertyCard, styleOverrides.propertyCard]} mode="elevated" onPress={() => onPress(item)}>
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <Text variant="titleMedium" numberOfLines={1} style={[styles.titleText, styleOverrides.titleText]}>
                {item.title}
              </Text>
              <Text variant="bodyMedium" style={[styles.description, styleOverrides.descriptionStyle]} numberOfLines={3}>
                  {item.description}
                </Text>
              <View style={styles.locationContainer}>
                <Icon size={moderateScale(14)} source="map-marker" color={Colors.error} style={styles.icon} />
                <Text variant="bodyMedium" style={[styles.locationText, styleOverrides.locationText]} numberOfLines={2}>
                  {item.location}
                </Text>
              </View>
              {/* <View style={styles.propertyDetailsRow}>
                <Text style={styles.propertyDetailText}>
                  <Icon source="bed" size={16} color={Colors.text} /> {item.bedrooms} Beds
                </Text>
                <Text style={styles.propertyDetailText}>
                  <Icon source="shower" size={16} color={Colors.text} /> {item.bathrooms} Baths
                </Text>
              </View> */}
                <Text style={styles.priceText}>{item.price}</Text>
              
            </View>
            <View style={styles.imageContainer}>
              <Card.Cover source={item.image} style={styles.propertyImageTop} />
              <Card.Cover source={item.image} style={styles.propertyImageBottom} />
            </View>
          </View>
        </Card>
      )}
      keyExtractor={(item) => item.id.toString()}
      style={styles.scrollView}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: moderateScale(10),
  },
  propertyCard: {
    margin: moderateScale(5),
    borderRadius: moderateScale(12),
    width: moderateScale(300),
    backgroundColor: Colors.background,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    padding: moderateScale(10),
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  propertyImageTop: {
    height: moderateScale(70),
    width: moderateScale(100),
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(5),
  },
  propertyImageBottom: {
    height: moderateScale(70),
    width: moderateScale(100),
    borderRadius: moderateScale(8),
  },
  propertyDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScaleVertical(5),
  },
  propertyDetailText: {
    fontFamily: FONTS.regular,
    fontSize: textScale(13),
    color: Colors.text,
  },
  textContainer: {
    flex: 1,
    marginRight: moderateScale(10),
  },
  titleText: {
    fontFamily: FONTS.bold,
    fontSize: textScale(16),
    color: Colors.primary,
  },
  priceChip: {
    marginTop: moderateScale(5),
    backgroundColor: Colors.primary,
  },
  priceText: {
    fontSize: textScale(14),
    fontFamily: FONTS.bold,
    color: Colors.primary,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(5),
    marginBottom: moderateScale(5),
  },
  locationText: {
    fontSize: textScale(11),
    color: Colors.text,
    marginLeft: moderateScale(5),
  },
  icon: {
    backgroundColor: 'transparent',
  },
  description: {
    fontSize: textScale(11),
    color: Colors.text,
    marginTop: moderateScale(5),
  },
});

export default NewPropertyCard;