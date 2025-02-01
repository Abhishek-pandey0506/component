import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SectionHeading } from '../../../components';
import { Colors, FONTS, moderateScale, textScale, moderateScaleVertical } from '../../../utils';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.8; // Show part of the next card

const BannerSlider = ({ data }) => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
        scrollViewRef.current.scrollTo({ x: nextIndex * cardWidth, animated: true });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  const handleDotPress = (index) => {
    setCurrentIndex(index);
    scrollViewRef.current.scrollTo({ x: index * cardWidth, animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {data.map((banner, index) => (
          <View key={index} style={styles.card}>
            <Image source={banner.image} style={styles.bannerImage} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
            <View
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(20),
  },
  scrollView: {
    width,
  },
  contentContainer: {
    paddingHorizontal: moderateScale(10),
    marginRight: moderateScale(10),
  },
  card: {
    width: cardWidth,
    marginHorizontal: moderateScale(5),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    backgroundColor: Colors.background,
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  bannerImage: {
    width: '100%',
    height: moderateScale(170),
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(10),
  },
  dot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    marginHorizontal: moderateScale(4),
  },
  activeDot: {
    backgroundColor: Colors.primary,
  },
  inactiveDot: {
    backgroundColor: Colors.text,
  },
});

export default BannerSlider;
