/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
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
import themes from '../../themes/themes';
import ListAccordion from './components/ListAccordion';
import ListItem from './components/ListItem';

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

      <ListAccordion
        title="Notificações"
        leftIcon="bell"
        leftIconColor={themes.color.primary.dark}
        theme={{
          colors: {
            text: themes.color.primary.dark,
            background: themes.color.ghost_white,
            primary: themes.color.primary.dark,
          },
        }}>
        <ListItem
          title="Notificações ativas"
          onPress={() => {
            console.log('not ativas');
          }}
        />

        <ListItem
          title="Historico de notificações"
          onPress={() => {
            console.log('hist de not');
          }}
        />
      </ListAccordion>

      <ListAccordion
        title="Sobre o aplicativo"
        leftIcon="help"
        rightIcon="chevron-right"
        theme={{
          colors: {
            background: themes.color.ghost_white,
            primary: themes.color.soft_black,
          },
        }}
        onPress={() => {
          console.log('Sobre o app');
        }}
      />
    </BackgroundContainer>
  );
}

export default Menu;
