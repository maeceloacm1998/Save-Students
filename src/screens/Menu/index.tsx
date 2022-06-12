import React from 'react';
import {} from 'react-native';

import {Image} from '../../components/Header/style';
import Icon from '../../components/icon/icon';

import Logo from '../../assets/logo.png';
import {ScreenProps} from '../../utils';

import {
  BackgroundContainer,
  GoBackButton,
  GoBackText,
  HeaderContainer,
} from './style';

function Menu({navigation}: ScreenProps) {
  const goBackScreen = () => navigation.goBack();

  return (
    <BackgroundContainer>
      <HeaderContainer>
        <GoBackButton onPress={goBackScreen}>
          <Icon type="MaterialIcons" name="arrow-back-ios" size={20} />
          <GoBackText>Voltar</GoBackText>
        </GoBackButton>

        <Image source={Logo} />
      </HeaderContainer>
    </BackgroundContainer>
  );
}

export default Menu;
