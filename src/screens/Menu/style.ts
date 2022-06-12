import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ripple from 'react-native-material-ripple';
import themes from '../../themes/themes';

const BackgroundContainer = styled.View`
  flex: 1;
  background-color: ${themes.color.ghost_white};
  padding-left: 16px;
  padding-right: 16px;
`;

const HeaderContainer = styled.View`
  height: ${RFValue(80)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: ${themes.color.secondary};
  border-bottom-width: 1px;
`;

const GoBackButton = styled(Ripple).attrs({
  rippleColor: themes.color.primary.dark,
})`
  height: 30px;
  width: 90px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GoBackText = styled.Text`
  font-size: 16px;
  font-family: ${themes.fonts.roboto_medium};
  color: ${themes.color.soft_black};
  margin-left: 8px;
`;

export {BackgroundContainer, HeaderContainer, GoBackButton, GoBackText};
