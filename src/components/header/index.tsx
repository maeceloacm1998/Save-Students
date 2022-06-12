/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import Ripple from 'react-native-material-ripple';

import Logo from '../../assets/logo.png';
import Icon from '../icon/icon';
import themes from '../../themes/themes';
import {ScreenNavigationProp} from '../../utils';

import {BackgroundContainer, Container, Image} from './style';

type HeaderType = {
  navigation: ScreenNavigationProp;
};

function Header({navigation}: HeaderType) {
  const openMenu = () => navigation.navigate('Menu');

  return (
    <BackgroundContainer>
      <Container>
        <Ripple rippleColor={themes.color.primary.dark} onPress={openMenu}>
          <Icon
            type="Feather"
            name="menu"
            size={30}
            color={themes.color.soft_black}
          />
        </Ripple>

        <Image source={Logo} />
      </Container>
    </BackgroundContainer>
  );
}

export default Header;
