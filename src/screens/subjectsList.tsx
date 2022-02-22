import React from 'react';
import {View} from 'react-native';

import Header from '../components/header/header';
import PickerSelect from '../components/picker-select/picker-select';

const array = [
  {
    label: 'Selecione',
    value: '',
  },
  {
    label: 'aqui',
    value: 'aqui',
  },
  {
    label: 'dali',
    value: 'dali',
  },
  {
    label: 'Java',
    value: 'Java',
  },
  {
    label: 'Yula',
    value: 'Yula',
  },
  {
    label: 'Americanas',
    value: 'Americanas',
  },
  {
    label: 'Iola',
    value: 'Iola',
  },
  {
    label: 'polita',
    value: 'polita',
  },
];

function SubjectList() {
  const item = (value: string) => {
    console.log(value);
  };
  return (
    <View>
      <Header />
      <PickerSelect listPickerItem={array} itemSelected={item} />
    </View>
  );
}

export default SubjectList;
