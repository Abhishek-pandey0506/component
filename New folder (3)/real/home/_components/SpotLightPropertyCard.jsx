import React from 'react';
import { View, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import { Text, Card, Icon, Chip, Button } from 'react-native-paper';
import { SectionHeading } from '../../../components';
import { Colors, FONTS, moderateScale, textScale, moderateScaleVertical } from '../../../utils';

const { width } = Dimensions.get('window');

const SpotLightPropertyCard = ({ data, title, onPress }) => {
    const renderItem = ({ item }) => (
        <View style={{ width: width - moderateScale(30) }}>
            <Card style={[styles.card,]} elevation={4} onPress={() => onPress(item)}>
                <View>
                    <Image source={item.image} style={styles.cardImage} />
                    <View style={styles.chipContainer}>
                        <Chip style={styles.chip} textStyle={styles.chipText}>
                            {item.subHeading}
                        </Chip>
                    </View>
                    <View style={styles.locationContainer}>
                        <Icon source="map-marker" size={moderateScale(16)} color={Colors.error} />
                        <Text style={styles.locationText}>
                            {item.location}
                        </Text>
                    </View>
                </View>
                <View style={styles.overlay}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
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
                    <View style={styles.otherDetails}>
                        <Text style={styles.otherDetailsText}>Owner: {item.agency.name}</Text>
                    </View>
                    <View style={styles.priceDetailsRow}>
                        {/* {item.priceDetails.map((detail, index) => (
                            <View key={index} style={styles.priceDetailContainer}>
                                <Text style={styles.priceDetailText}>{detail.day} - Day Stay</Text>
                                <Text style={styles.priceText}>${detail.price} / Night</Text>
                            </View>
                        ))} */}
                         <View style={styles.priceDetailContainer}>
                         <Text style={[styles.priceDetailText, { fontSize: textScale(13), fontFamily: FONTS.medium }]}>{item.priceDetails[0].day}-Day Stay/<Text style={{ fontFamily: FONTS.bold, color: Colors.primary }}>${item.priceDetails[0].price} </Text></Text>
                            <Button
                              mode="contained"
                              style={styles.button}
                              labelStyle={styles.buttonLabel}
                              onPress={() => {}}
                            >
                              Book Now
                            </Button>
                         </View>
                    </View>
                </View>
            </Card>
        </View>
    );

    return (
        <View>
            <SectionHeading title={title} />
            <FlatList
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.scrollView}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        marginBottom: moderateScale(10),
    },
    card: {
        margin: moderateScale(15),
        marginVertical: moderateScaleVertical(10),
        borderRadius: moderateScale(12),
        overflow: 'hidden',
        backgroundColor: Colors.background,
        elevation: 8,
    },
    cardImage: {
        width: '100%',
        height: moderateScale(200),
    },
    overlay: {
        padding: moderateScale(15),
    },
    chipContainer: {
        position: 'absolute',
        top: moderateScale(10),
        right: moderateScale(10),
    },
    chip: {
        backgroundColor: Colors.primary,
        borderRadius: moderateScale(8),
    },
    chipText: {
        color: Colors.background,
        fontFamily: FONTS.bold,
    },
    locationContainer: {
        position: 'absolute',
        bottom: moderateScale(10),
        left: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        color: Colors.onText,
        fontFamily: FONTS.bold,
        marginLeft: moderateScale(5),
    },
    titleText: {
        fontFamily: FONTS.bold,
        fontSize: textScale(20),
        color: Colors.text,
    },
    descriptionText: {
        fontFamily: FONTS.regular,
        fontSize: textScale(13),
        color: Colors.text,
        marginBottom: moderateScale(8),
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
    otherDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScaleVertical(5)
    },
    otherDetailsText: {
        fontFamily: FONTS.regular,
        fontSize: textScale(13),
        color: Colors.text,
    },
    priceDetailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    priceDetailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: Colors.background,
        padding: moderateScale(5),
        borderRadius: moderateScale(8),
        flexBasis: '100%',
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    priceDetailText: {
        fontFamily: FONTS.regular,
        fontSize: textScale(13),
        color: Colors.text,
    },
    priceText: {
        fontFamily: FONTS.bold,
        fontSize: textScale(13),
        color: Colors.primary,
    },
    button: {
        backgroundColor: Colors.primary,
        borderRadius: moderateScale(8),
        marginTop: moderateScale(5)
    },
    buttonLabel: {
        fontFamily: FONTS.bold,
        fontSize: textScale(12),
        color: Colors.background
    }
});

export default SpotLightPropertyCard;
