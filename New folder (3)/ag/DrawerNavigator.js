import {
  Pressable,
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {RouteName} from '../helper/strings';
import {Divider} from 'react-native-paper';
import CustomIcon, {ICON_TYPE} from '../components/CustomIcon';
import {colors} from '../resources/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  verticalScale,
} from '../helper/responsiveSize';
import NavigationService from './NavigationService';
import Spacer from '../components/Spacer';
import MainTabNavigator from './MainTabNavigator';
import {appString} from '../resources/appStrings';
import { useDispatch } from 'react-redux';
import { userLogoutAction } from '../../store';
import { logout } from '../store/reducer/auth';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const DrawerHeader = () => {
    const closeDrawer = () => {
      NavigationService.closeDrawer();
    };
    return (
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>More</Text>
        <Pressable onPress={closeDrawer}>
          <CustomIcon
            name={'close-a'}
            origin={ICON_TYPE.FONTISTO}
            size={20}
            color={'#fff'}
          />
        </Pressable>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <Pressable onPress={item.onPress}>
        <View style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>{item.name}</Text>
          <CustomIcon
            name={'caretright'}
            origin={ICON_TYPE.ANT_ICON}
            size={20}
            color={'#fff'}
          />
        </View>
        <Divider bold />
      </Pressable>
    );
  };

  const onLogout = () => setModalVisible(true);

  const handleLogout = () => {

    dispatch(logout());
  
    // NavigationService.resetRoot({
    //   index: 0,
    //   routes: [{name: RouteName.SIGNIN}],
    // });
  };

  const drawerItem = [
    {
      name: 'Home',
      onPress: () => {
        NavigationService.navigate(RouteName.HOME);
      },
    },
    {
      name: 'About Us',
      onPress: () => {
        NavigationService.navigate(RouteName.ABOUT_US);
      },
    },
    {
      name: 'Contact Us',
      onPress: () => {
        NavigationService.navigate(RouteName.CONTACT_US);
      },
    },
    {
      name: 'Frequently Asked Questions',
      onPress: () => {
        NavigationService.navigate(RouteName.FAQ);
      },
    },
    {
      name: 'News',
      onPress: () => {
        NavigationService.navigate(RouteName.NEWS);
      },
    },
    {
      name: 'Privacy Policy',
      onPress: () => {
        NavigationService.navigate(RouteName.PRIVACY_POLICY);
      },
    },
    {
      name: 'Terms of Service',
      onPress: () => {
        NavigationService.navigate(RouteName.TERMS_AND_CONDITIONS);
      },
    },
    {
      name: 'Logout',
      onPress: onLogout,
    },
  ];

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.drawerContentContainer}
        {...props}>
        <DrawerHeader />

        <Spacer height={verticalScale(80)} />
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          scrollEnable={false}
          data={drawerItem}
          renderItem={renderItem}
          ListHeaderComponent={() => {
            return (
              <>
                <View style={styles.profileContainer}>
                  <View style={styles.profileIconContainer}>
                    <CustomIcon
                      name={'person'}
                      origin={ICON_TYPE.IONICONS}
                      size={25}
                      color={'#fff'}
                    />
                  </View>
                  <Text style={styles.profileText}>Samantha Sample</Text>
                </View>
                <Spacer height={verticalScale(20)} />
              </>
            );
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modelContainer}>
                <CustomIcon
                  name={'alert-circle-sharp'}
                  origin={ICON_TYPE.IONICONS}
                  size={50}
                  color={colors.White}
                />
              </View>
              <Text style={styles.title}>Logout</Text>
              <Text style={styles.message}>{appString.LOGOUT_MESSAGE}</Text>
              <TouchableOpacity
                style={styles.noButton}
                onPress={handleLogout}
                >
                <Text style={styles.noButtonText}>Sign Out</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.yesButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.yesButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        swipeEnabled: false,
        drawerStyle: {width: '80%'},
        headerShown: false,
        drawerLabelStyle: {
          display: 'none',
        },
      }}>
      <Drawer.Screen
        name={RouteName.MAINTAB}
        component={MainTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#475569',
    height: moderateScaleVertical(70),
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },
  drawerHeaderText: {
    color: colors.White,
    paddingVertical: moderateScaleVertical(10),
    fontSize: textScale(16),
    fontWeight: 'bold',
  },
  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(14),
  },
  drawerItemText: {
    fontWeight: '600',
    fontSize: textScale(14),
    marginLeft: moderateScale(10),
    color: '#fff',
  },
  drawerContentContainer: {
    flex: 1,
    backgroundColor: '#475569',
    paddingTop: 0,
    paddingBottom: 0,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileIconContainer: {
    height: moderateScale(50),
    width: moderateScale(50),
    backgroundColor: colors.Black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(25),
    marginHorizontal: moderateScale(10),
  },
  profileText: {
    fontSize: textScale(16),
    fontWeight: '700',
    color: colors.White,
    padding: moderateScale(10),
    paddingLeft: moderateScale(20),
  },

  modelContainer: {
    width: moderateScale(50),
    height: moderateScaleVertical(50),
    backgroundColor: colors.Warning,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: colors.White,
    borderRadius: 20,
    padding: moderateScale(20),
    paddingVertical: moderateScaleVertical(30),
    margin: moderateScale(20),
    // width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: textScale(24),
    fontWeight: '900',
    marginBottom: moderateScaleVertical(20),
  },
  message: {
    fontSize: textScale(18),
    color: colors.MediumDark,
    textAlign: 'center',
    marginBottom: moderateScaleVertical(20),
  },
  noButton: {
    backgroundColor: colors.Warning,
    borderRadius: 25,
    paddingVertical: moderateScaleVertical(10),
    paddingHorizontal: moderateScale(40),
    marginBottom: moderateScaleVertical(10),
    width: moderateScale(280),
    justifyContent: 'center',
    alignItems: 'center',
  },
  noButtonText: {
    color: colors.White,
    fontSize: textScale(18),
  },
  yesButton: {
    borderColor: colors.Warning,
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: moderateScaleVertical(10),
    paddingHorizontal: moderateScale(40),
    width: moderateScale(280),
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesButtonText: {
    color: colors.Warning,
    fontSize: textScale(18),
    fontWeight: 600,
  },
});

export default DrawerNavigator;
