/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-unused-prop-types */
import React, {useEffect, useState} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export type ItemPicker = {
  label: string;
  value: string;
};

type PicketSelect = {
  listPickerItem: Array<ItemPicker>;
  itemSelected: (value: string) => void;
  customStyle?: StyleProp<ViewStyle>;
};

const translate = (props: PicketSelect) => ({
  listPickerItem: props.listPickerItem
    ? props.listPickerItem
    : [{label: '', value: ''}],
  itemSelected: props.itemSelected ? props.itemSelected : () => {},
  customStyle: props.customStyle ? props.customStyle : {},
});

function PickerSelect(props: PicketSelect) {
  const {listPickerItem, itemSelected, customStyle} = translate(props);
  const [selectedLanguage, setSelectedLanguage] = useState<string>();

  useEffect(() => {
    itemSelected(selectedLanguage || '');
  }, [selectedLanguage]);

  useEffect(() => {}, []);
  return (
    <Picker
      style={customStyle}
      selectedValue={selectedLanguage}
      onValueChange={itemValue => setSelectedLanguage(itemValue)}>
      {listPickerItem.map(item => {
        return <Picker.Item label={item.label} value={item.value} />;
      })}
    </Picker>
  );
}

export default PickerSelect;
