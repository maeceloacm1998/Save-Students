/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable default-case */

import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import themes from '../../themes/themes';

type Icon = {
  name: string;
  color?: string;
  size: number;
  type: 'AntDesign' | 'Ionicons' | 'Feather' | 'MaterialIcons';
};

const translate = (props: Icon) => ({
  name: props.name ? props.name : 'ios-help-circle-outline',
  color: props.color ? props.color : themes.color.soft_black,
  size: props.size ? props.size : 20,
  type: props.type ? props.type : 'Ionicons',
});

function Icon(props: Icon) {
  const {color, name, size, type} = translate(props);

  switch (type) {
    case 'AntDesign':
      return <AntDesign name={name} size={size} color={color} />;
    case 'Ionicons':
      return <Ionicons name={name} size={size} color={color} />;
    case 'Feather':
      return <Feather name={name} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} />;
  }
}

export default Icon;
