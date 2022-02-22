import React from 'react';
import {Image, Text, View} from 'react-native';
import themes from '../themes/themes';

function Teste() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: themes.fonts.roboto.bold, fontSize: 30}}>
        dale daledale
      </Text>
    </View>
  );
}

export default Teste;
