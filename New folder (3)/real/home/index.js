import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useThemeContext } from '../../_customContext';
import { Images, Colors, FONTS, textScale, moderateScale, moderateScaleVertical, ROUTE_NAME } from '../../utils';
import { Text, Surface, Searchbar, IconButton, Avatar, Chip, Button } from 'react-native-paper';
import CategoryCard from './_components/CategoryCard';
import TestimonialCard from './_components/TestimonialCard';
import FavoriteCityCard from './_components/FavoriteCityCard';
import PropertyCard from './_components/PropertyCard';
import BannerSlider from './_components/bannerSlider';
import NewPropertyCard from './_components/NewPropertyCard';
import { Spacer } from '../../components';
import PrimePropertyCard from './_components/PrimePropertyCard';
import SpotLightPropertyCard from './_components/SpotLightPropertyCard';
import {
  userData,
  propertyData,
  spotlightProperties,
  favoriteCities,
  testimonials,
  categoryOptions,
  bannerSliderData,
  primePropertyData
} from './CardData';
import FilterModal from './_components/filterModel';

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Rent');
  const toggleFilterModal = () => setFilterModalVisible((prev) => !prev);
  const { theme } = useThemeContext();

  const handlePostAds = () => {
    navigation.navigate(ROUTE_NAME.GETTING_STARTED);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <Surface style={styles.container} elevation={0}>
        <View style={styles.innerContainer}>

          {/* <View style={styles.header}>
            <View style={styles.userInfo}>
              <Text variant="titleLarge" style={styles.userName}>{userData?.name}</Text>
              <Text variant="bodyMedium" style={styles.userEmail}>{userData?.email}</Text>
            </View>
            <Avatar.Icon
              size={moderateScale(50)}
              icon="account-circle"
            />
          </View> */}
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <Text variant="titleLarge" style={styles.userName}>Welcome User!</Text>
              <Text variant="bodyMedium" style={styles.userEmail}>Get your dream home</Text>
            </View>
            <Chip
              onPress={handlePostAds}
              style={styles.postAdsChip}
            >
              Post Ads for Free
            </Chip>
          </View>

          <View style={{ flexDirection: 'row', gap: moderateScale(10), }}>
            <Chip selectedColor={Colors.primary} mode={'outlined'} selected={selectedFilter === 'Rent'} onPress={() => setSelectedFilter('Rent')} >Rent</Chip>
            <Chip selectedColor={Colors.primary} mode={'outlined'} selected={selectedFilter === 'Builder'} onPress={() => setSelectedFilter('Builder')}>Builder</Chip>
          </View>
          <View style={styles.searchSection}>
            <Searchbar
              placeholder="Search properties..."
              onChangeText={setSearchText}
              value={searchText}
              style={styles.searchBar}
            />
            <IconButton
              icon="tune-variant"
              style={styles.filterButton}
              size={moderateScale(24)}
              iconColor={Colors.background}
              onPress={toggleFilterModal}
            />
          </View>
        </View>
        <CategoryCard data={categoryOptions} />
        <View style={styles.contentContainer}>
          <SpotLightPropertyCard data={spotlightProperties} title="SpotLight Popular" onPress={(property) => navigation.navigate(ROUTE_NAME.PROPERTY_DETAILS, { property })} />
          <Spacer height={moderateScale(5)} />

          <Surface style={{ backgroundColor: Colors.background, borderRadius: moderateScale(12), padding: moderateScale(15), marginHorizontal: moderateScale(15) }} elevation={3}>
              <View style={{ flex: 1, marginRight: moderateScale(10) }}>
                <Text style={{ fontFamily: FONTS.bold, fontSize: textScale(16), color: Colors.text, marginBottom: moderateScale(5) }}>Connect with Expert Agents</Text>
                <Text style={{ fontFamily: FONTS.regular, fontSize: textScale(13), color: Colors.outline }}>Get personalized guidance from top-rated real estate agents in your area</Text>
              </View>
              <Button
                mode="contained"
                style={{ backgroundColor: Colors.primary, borderRadius: moderateScale(8), alignSelf: 'flex-end' }}
                labelStyle={{ fontFamily: FONTS.bold, fontSize: textScale(12), color: Colors.background }}
                onPress={() => { }}
              >
                Find an Agent
              </Button>

          </Surface>
          <Spacer height={moderateScale(20)} />
        </View>
        <PrimePropertyCard data={primePropertyData}  onPress={(property) => navigation.navigate(ROUTE_NAME.PROPERTY_DETAILS, { property })}  />
        <Spacer height={moderateScale(30)} />
        <View style={styles.contentContainer}>
        <PropertyCard data={propertyData} navigation={navigation} title="Featured Properties"  onPress={(property) => navigation.navigate(ROUTE_NAME.PROPERTY_DETAILS, { property })}  />
       
          <Spacer height={moderateScale(30)} />
          <BannerSlider data={bannerSliderData} />
          <Spacer height={moderateScale(20)} />
          <PropertyCard data={propertyData.filter(item => item.isPopular)} navigation={navigation} title="Projects"  onPress={(property) => navigation.navigate(ROUTE_NAME.PROPERTY_DETAILS, { property })}  />
          <Spacer height={moderateScale(30)} />

          <FavoriteCityCard data={favoriteCities} title="Favorite Cities" />

          <Spacer height={moderateScale(30)} />
          <PropertyCard data={propertyData.filter(item => item.isPopular)} navigation={navigation} title="Hostal"  onPress={(property) => navigation.navigate(ROUTE_NAME.PROPERTY_DETAILS, { property })}  />

          <Spacer height={moderateScaleVertical(20)} />
          <NewPropertyCard data={propertyData.filter(item => item.isNew)} navigation={navigation} title="New Properties"  onPress={(property) => navigation.navigate(ROUTE_NAME.PROPERTY_DETAILS, { property })}  />
          <Spacer height={moderateScale(30)} />

          <Spacer height={moderateScaleVertical(20)} />
          <PropertyCard data={propertyData.filter(item => item.isPopular)} navigation={navigation} title="Agricultral"  onPress={(property) => navigation.navigate(ROUTE_NAME.PROPERTY_DETAILS, { property })}  />
          

          
          <TestimonialCard data={testimonials} title="Testimonials" />


        </View>
      </Surface>
      <FilterModal visible={filterModalVisible} onDismiss={toggleFilterModal} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    paddingTop: moderateScaleVertical(20),
    paddingHorizontal: moderateScale(10)
  },
  innerContainer: {
    paddingHorizontal: moderateScale(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScaleVertical(20)
  },
  userInfo: {
    flex: 1
  },
  userName: {
    fontFamily: FONTS.bold,
    fontSize: textScale(20),
    color: Colors.primary
  },
  userEmail: {
    fontFamily: FONTS.regular,
    color: Colors.outline,
    fontSize: textScale(14)
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScaleVertical(20),
    gap: moderateScale(10)
  },
  searchBar: {
    flex: 1,
    elevation: 0,
    borderRadius: moderateScale(12),
    height: moderateScale(48)
  },
  filterButton: {
    marginLeft: 'auto',
    borderRadius: moderateScale(12),
    minWidth: moderateScale(48),
    backgroundColor: Colors.primary,
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterButtonContent: {
    height: moderateScale(48),
    width: moderateScale(48)
  },
  contentContainer: {
    paddingRight: moderateScale(10),
    overflow: 'hidden',
  },
  optionScrollView: {
    marginBottom: moderateScaleVertical(20),
  },
  scrollView: {
    paddingHorizontal: moderateScale(10)
  }
});
