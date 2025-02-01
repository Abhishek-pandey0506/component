import React from 'react';
import { View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { Text, Card, Icon, Avatar, Chip } from 'react-native-paper';
import { SectionHeading } from '../../../components';
import { Colors, FONTS, moderateScale, textScale, moderateScaleVertical, width, Images } from '../../../utils';

const PrimePropertyCard = ({data, onPress }) => {
    return (
        <ImageBackground source={Images.backgroundOne} style={styles.propertyImage}>
            <FlatList
                data={data}
                horizontal
                pagingEnabled
                renderItem={({ item, index }) => {
                    return (
                        <Card style={styles.card} elevation={4} onPress={() => onPress(item)}>
                            <View style={styles.overlay}>
                                {/* Title and Subheading */}
                                <Text style={styles.titleText}>{item.title}</Text>
                                <Text style={styles.titleSubText}>{item.subHeading}</Text>

                                {/* Location */}
                                <Text style={styles.locationText}>
                                    <Icon source="map-marker" size={16} color={Colors.error} /> {item.location}
                                </Text>

                                {/* Description */}
                                <Text style={styles.descriptionText}>{item.description}</Text>

                                {/* Agency Details and Price in a Row */}
                                <View style={styles.detailsRow}>
                                    <View style={styles.otherDetails}>
                                        <Avatar.Image source={item.avatar} size={moderateScale(40)} style={styles.avatar} />
                                        <View>
                                            <Text style={styles.otherDetailsText}>{item?.agency?.name}</Text>
                                            <Text style={styles.otherDetailsTextEmail}>{item?.agency?.email}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.priceContainer}>
                                        <Chip style={styles.priceChip} textStyle={styles.priceChipText}>{item.price}</Chip>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    )
                }}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
            />

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    propertyImage: {
        justifyContent: 'flex-end',
        width: width,
        overflow: 'hidden',
        marginHorizontal: moderateScale(-10),
    },
    card: {
        margin: moderateScale(15),
        marginVertical: moderateScaleVertical(20),
        borderRadius: moderateScale(12),
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Subtle background for text clarity
        elevation: 8,
        width: width - moderateScale(40)
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background overlay for better visibility
        borderRadius: moderateScale(8),
        padding: moderateScale(15),
    },
    titleText: {
        fontFamily: FONTS.bold,
        fontSize: textScale(20),
        color: Colors.onText,
    },
    titleSubText: {
        fontFamily: FONTS.regular,
        fontSize: textScale(13),
        color: Colors.onText,
    },
    locationText: {
        fontFamily: FONTS.regular,
        fontSize: textScale(14),
        color: Colors.onText,
        marginVertical: moderateScaleVertical(12)
    },
    descriptionText: {
        fontFamily: FONTS.regular,
        fontSize: textScale(13),
        color: 'white',
        marginBottom: moderateScale(8),
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateScale(10),
    },
    otherDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: moderateScale(10),
    },
    otherDetailsText: {
        fontFamily: FONTS.regular,
        fontSize: textScale(13),
        color: 'lightgray',
    },
    otherDetailsTextEmail: {
        fontFamily: FONTS.regular,
        fontSize: textScale(11),
        color: 'lightgray',
    },
    priceContainer: {
        alignItems: 'flex-start', // Adjusted alignment for price chip
    },
    priceChip: {
        backgroundColor: Colors.primary,
    },
    priceChipText: {
        color: Colors.onText,
        fontFamily: FONTS.regular,
    }
});

export default PrimePropertyCard;
