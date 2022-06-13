/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {List} from 'react-native-paper';
import themes from '../../../../themes/themes';

type ListItem = {
  title: string;
  rightIcon?: string;
  onPress: () => void;
};

const translate = (props: ListItem) => ({
  title: props.title ? props.title : 'default text',
  rightIcon: props.rightIcon ? props.rightIcon : 'chevron-right',
  onPress: props.onPress ? props.onPress : () => undefined,
});

function ListItem(props: ListItem) {
  const {onPress, rightIcon, title} = translate(props);

  return (
    <List.Item
      title={title}
      rippleColor={themes.color.primary.ripple}
      right={_ => <List.Icon icon={rightIcon} />}
      onPress={onPress}
    />
  );
}

export default ListItem;
