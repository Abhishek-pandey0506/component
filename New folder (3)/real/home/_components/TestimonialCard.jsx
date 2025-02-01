import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Avatar, Icon } from 'react-native-paper';
import { SectionHeading } from '../../../components';
import { Colors, FONTS, moderateScale, textScale, moderateScaleVertical } from '../../../utils';


const TestimonialCard = ({ data, title }) => (
  <View>
    <SectionHeading title={title} />
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item: testimonial }) => (
        <Card key={testimonial.id} style={styles.testimonialCard} mode="elevated">
          <Card.Content style={styles.testimonialDetails}>
            <Avatar.Image size={moderateScale(40)} source={testimonial.image} />
            <View style={styles.testimonialTextContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text variant="titleMedium" style={styles.testimonialName}>{testimonial.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <Icon key={index} source="star" size={moderateScale(12)} color="gold" />
                  ))}
                </View>
              </View>
              <Text variant="bodyMedium" style={styles.testimonialFeedback} numberOfLines={3} ellipsizeMode="tail">{testimonial.feedback}</Text>
            </View>
          </Card.Content>
        </Card>
      )}
      keyExtractor={(item) => item.id.toString()}
      style={styles.scrollView}
    />
  </View>
);

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: moderateScale(5),
  },
  testimonialCard: {
    margin: moderateScale(5),
    borderRadius: moderateScale(10),
    width: moderateScale(300),
    backgroundColor: Colors.background,
    overflow: 'hidden',
  },
  testimonialDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  testimonialTextContainer: {
    paddingHorizontal: moderateScale(8),
    flex: 1,
  },
  testimonialName: {
    fontFamily: FONTS.bold,
    fontSize: textScale(12),
    color: Colors.primary,
  },
  testimonialFeedback: {
    fontFamily: FONTS.regular,
    fontSize: textScale(10),
    color: Colors.outline,
    width: '90%',
  },
});

export default TestimonialCard;
