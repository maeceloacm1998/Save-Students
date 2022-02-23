import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import themes from '../../themes/themes';
import Logo from '../../assets/monkey.png';

function NotFoundSubjectList() {
  const styles = StyleSheet.create({
    NotFoundContainer: {
      flex: 1,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      height: 149,
      width: 149,
      marginBottom: 10,
    },
    text: {
      fontSize: RFValue(24),
      lineHeight: RFValue(28),
      textAlign: 'center',
      fontFamily: themes.fonts.roboto.medium,
      color: themes.color.black,
    },
  });

  return (
    <View style={styles.NotFoundContainer}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>Selecione um período{`\n`}e um turno</Text>
    </View>
  );
}

export default NotFoundSubjectList;
