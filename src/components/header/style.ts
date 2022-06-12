import styled from 'styled-components/native';

import {RFValue} from 'react-native-responsive-fontsize';
import themes from '../../themes/themes';

const BackgroundContainer = styled.View`
  height: ${RFValue(80)}px;
  width: ${RFValue(100)}%;
  align-items: flex-start;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${themes.color.ghost_white};
`;

const Container = styled.View`
  width: ${RFValue(58)}%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.Image`
  height: ${RFValue(30)}px;
  width: ${RFValue(60)}px;
`;

export {BackgroundContainer, Container, Image};
