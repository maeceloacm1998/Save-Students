/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {Pressable} from 'react-native';

import Logo from '../../assets/logo.png';
import themes from '../../themes/themes';
import {ScreenNavigationProp} from '../../utils';
import Icon from '../icon/icon';

import {BackgroundContainer, Container, Image} from './style';

type HeaderType = {
  navigation: ScreenNavigationProp;
};

function Header({navigation}: HeaderType) {
  const openMenu = () => navigation.navigate('Menu');

  return (
    <BackgroundContainer>
      <Container>
        <Pressable onPress={openMenu}>
          <Icon
            type="Feather"
            name="menu"
            size={30}
            color={themes.color.soft_black}
          />
        </Pressable>

        <Image source={Logo} />
      </Container>
    </BackgroundContainer>
  );
}

export default Header;
