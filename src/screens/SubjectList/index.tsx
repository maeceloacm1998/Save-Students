import React from 'react';
import {} from 'react-native';

import Header from '../../components/Header';
import {ScreenProps} from '../../utils';

import {Dale, Dale2} from './style';

function SubjectList({navigation}: ScreenProps) {
  return (
    <>
      <Header navigation={navigation} />
      <Dale>DALE DALE</Dale>
      <Dale2>DALE 2 Dale 2</Dale2>
    </>
  );
}

export default SubjectList;
