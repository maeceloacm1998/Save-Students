import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import Icon from '../components/icon/icon';

import themes from '../themes/themes';

import Logo from '../assets/logo.png';
import {ScreenProps} from '../utils';

function Menu({navigation}: ScreenProps) {
  const onPressCloseButton = () => navigation.goBack();
  const onPressLogo = () => navigation.navigate('Materias');
  const onPressSubjectListButton = () => navigation.navigate('Materias');
  const onPressNotificationButton = () => navigation.navigate('Settings');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themes.color.primary.light,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 15,
    },
    logo: {},
    optionsContainer: {
      flex: 1,
      marginTop: 40,
    },
    optionContainer: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      marginBottom: 15,
    },
    optionText: {
      fontSize: RFValue(16),
      fontFamily: themes.fonts.roboto.medium,
      color: themes.color.black,
      marginLeft: 10,
    },
    optionVersion: {
      fontSize: RFValue(16),
      fontFamily: themes.fonts.roboto.medium,
      color: themes.color.black,
      marginBottom: 10,
      marginLeft: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.optionVersion}>V 1.0</Text>
    </View>
  );
}

export default Menu;
