/* eslint-disable react/no-unused-prop-types */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import themes from '../../themes/themes';

type Icon = {
  name: string;
  color: string;
  size: number;
  type: 'AntDesign' | 'Ionicons';
};

const translate = (props: Icon) => ({
  name: props.name ? props.name : 'ios-help-circle-outline',
  color: props.color ? props.color : themes.color.primary.dark,
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
  }
}

export default Icon;
