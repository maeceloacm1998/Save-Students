import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import themes from '../../themes/themes';
import Monkey from '../../assets/monkey.png';
import Cat from '../../assets/cat.png';

type NotFoundSubjectListType = {
  type: 'NOTFOUND' | 'SELECTITEMS';
  text: string;
};

function NotFoundSubjectList({type, text}: NotFoundSubjectListType) {
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
      {type === 'NOTFOUND' && <Image source={Cat} style={styles.logo} />}
      {type === 'SELECTITEMS' && <Image source={Monkey} style={styles.logo} />}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default NotFoundSubjectList;
