import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.png';
import themes from '../../themes/themes';
import Icon from '../icon/icon';

function Header() {
  const styles = StyleSheet.create({
    container: {
      height: RFValue(96),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: themes.color.primary.light,
    },
    logo: {
      width: RFValue(102),
      height: RFValue(57),
    },
  });

  return (
    <View style={styles.container}>
      <Pressable>
        <Icon
          type="Ionicons"
          name="ios-menu"
          size={30}
          color={themes.color.secundary}
        />
      </Pressable>
      <Pressable>
        <Image source={Logo} style={styles.logo} />
      </Pressable>
      <Pressable>
        <Icon
          type="Ionicons"
          name="ios-help-circle-outline"
          size={30}
          color={themes.color.secundary}
        />
      </Pressable>
    </View>
  );
}

export default Header;
