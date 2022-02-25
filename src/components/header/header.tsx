/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.png';
import themes from '../../themes/themes';
import Icon from '../icon/icon';

type HeaderType = {
  showBackButton?: boolean;
  onPressMenu: () => void;
  onPressBackButton?: () => void;
  onPressHelp: () => void;
  onPressLogo: () => void;
};

const translate = (props: HeaderType) => ({
  showBackButton: props.showBackButton ? props.showBackButton : false,
  onPressMenu: props.onPressMenu ? props.onPressMenu : () => {},
  onPressBackButton: props.onPressBackButton
    ? props.onPressBackButton
    : () => {},
  onPressHelp: props.onPressHelp ? props.onPressHelp : () => {},
  onPressLogo: props.onPressLogo ? props.onPressLogo : () => {},
});

function Header(props: HeaderType) {
  const {
    onPressBackButton,
    onPressHelp,
    onPressLogo,
    onPressMenu,
    showBackButton,
  } = translate(props);

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
      {showBackButton ? (
        <Pressable onPressIn={onPressBackButton}>
          <Icon
            type="Ionicons"
            name="chevron-back"
            size={30}
            color={themes.color.secundary}
          />
        </Pressable>
      ) : (
        <Pressable onPressIn={onPressMenu}>
          <Icon
            type="Ionicons"
            name="ios-menu"
            size={30}
            color={themes.color.secundary}
          />
        </Pressable>
      )}
      <Pressable onPressIn={onPressLogo}>
        <Image source={Logo} style={styles.logo} />
      </Pressable>
      <Pressable onPressIn={onPressHelp}>
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
