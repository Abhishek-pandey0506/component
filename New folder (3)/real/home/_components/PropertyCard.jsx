import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Avatar, Icon } from 'react-native-paper';
import { SectionHeading } from '../../../components';
import { Colors, FONTS, moderateScale, textScale, moderateScaleVertical } from '../../../utils';

const PropertyCard = ({ data, styleOverrides = {}, title, onPress }) => (
  <View>
    <SectionHeading title={title} />
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => (
        <Card key={item.id} style={[styles.propertyCard, styleOverrides.propertyCard]} mode="elevated" onPress={() => onPress(item)}>
          <View style={styles.outerImageOverlay}>
          <View style={styles.imageOverlay}>
            <Text variant="titleMedium" numberOfLines={1} style={[styles.titleText, styleOverrides.titleText]}>
              {item.title}
            </Text>
            <Text variant="titleSmall" style={[styles.priceText, styleOverrides.priceText]} numberOfLines={1}>
              {item.price}
            </Text>
          </View>
          </View>
          <Card.Cover source={item.image} style={styles.propertyImage} />
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <Text variant="bodyMedium" style={styles.descriptionText} numberOfLines={2}>
                {item.description}
              </Text>
              <Text variant="bodyMedium" style={[styles.locationText, styleOverrides.locationText]} numberOfLines={1}>
                <Icon source="map-marker" size={moderateScale(16)} color={Colors.error} /> {item.location}
              </Text>

              <View style={styles.propertyDetailsRow}>
                <Text style={styles.propertyDetailText}>
                  <Icon source="bed" size={16} color={Colors.text} /> {item.bedrooms} Beds
                </Text>
                <Text style={styles.propertyDetailText}>
                  <Icon source="shower" size={16} color={Colors.text} /> {item.bathrooms} Baths
                </Text>
                <Text style={styles.propertyDetailText}>
                  <Icon source="square" size={16} color={Colors.text} /> {item.squareFeet} Sq Ft
                </Text>
              </View>
              <View style={styles.userContainer}>
                <Avatar.Icon 
                  size={moderateScale(24)} 
                  icon="account-circle"
                  style={{backgroundColor: Colors.primary}}
                />
                <Text style={styles.userName}>{item?.agency?.name}</Text>
              </View>
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
  scrollView: {
    paddingHorizontal: moderateScale(10),
  },
  propertyCard: {
    margin: moderateScale(5),
    borderRadius: moderateScale(12),
    width: moderateScale(250),
    backgroundColor: Colors.background,
    overflow: 'hidden',
  },
  outerImageOverlay: {
    position: 'absolute',
    top: moderateScale(10),
    left: moderateScale(10),
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: moderateScale(12),
  },
  imageOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
  },
  cardContent: {
    padding: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  propertyImage: {
    height: moderateScale(150),
    width: '100%',
  },
  textContainer: {
    flex: 1,
    marginTop: moderateScale(10),
  },
  titleText: {
    fontFamily: FONTS.bold,
    fontSize: textScale(13),
    color: Colors.onPrimary,
  },
  priceText: {
    fontSize: textScale(12),
    color: Colors.onPrimary,
  },
  locationText: {
    fontSize: textScale(12),
    color: Colors.outline,
    fontFamily: FONTS.regular,
    marginVertical: moderateScale(5),
  },
  propertyFeaturesRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  featureText: {
    fontSize: textScale(12),
    color: 'darkgray',
  },
  moreDetailsText: {
    fontSize: textScale(12),
    color: 'darkgray',
    marginTop: moderateScale(5),
  },
  agencyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  avatar: {
    backgroundColor: Colors.primary,
    marginRight: moderateScale(5),
  },
  agencyText: {
    fontSize: textScale(12),
    color: 'darkgray',
  },
  descriptionText: {
    fontSize: textScale(12),
    color: Colors.text,
    fontFamily: FONTS.regular,
    marginBottom: moderateScale(5),
  },
  propertyDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScaleVertical(5),
    paddingHorizontal: moderateScale(10),
  },
  propertyDetailText: {
    fontFamily: FONTS.regular,
    fontSize: textScale(13),
    color: Colors.text,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(8),
    paddingHorizontal: moderateScale(10),
  },
  userName: {
    marginLeft: moderateScale(8),
    fontFamily: FONTS.medium,
    fontSize: textScale(12),
    color: Colors.text,
  }
});

export default PropertyCard;