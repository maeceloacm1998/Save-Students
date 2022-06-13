/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {List} from 'react-native-paper';
import themes from '../../../../themes/themes';

type ListAccordionProps = {
  title: string;
  leftIcon?: string;
  leftIconColor?: string;
  rightIcon?: string;
  rightIconColor?: string;
  theme?: import('@callstack/react-theme-provider').$DeepPartial<ReactNativePaper.Theme>;
  children?: React.ReactNode;
  onPress?: () => void;
};

const translate = (props: ListAccordionProps) => ({
  title: props.title ? props.title : 'default text',
  rightIcon: props.rightIcon ? props.rightIcon : undefined,
  rightIconColor: props.rightIconColor
    ? props.rightIconColor
    : themes.color.soft_black,
  leftIcon: props.leftIcon ? props.leftIcon : 'chevron-right',
  leftIconColor: props.leftIconColor
    ? props.leftIconColor
    : themes.color.soft_black,
  theme: props.theme
    ? props.theme
    : ({} as import('@callstack/react-theme-provider').$DeepPartial<ReactNativePaper.Theme>),
  children: props.children ? props.children : null,
  onPress: props.onPress ? props.onPress : () => undefined,
});

function ListAccordion(props: ListAccordionProps): JSX.Element {
  const {
    children,
    leftIcon,
    leftIconColor,
    rightIcon,
    rightIconColor,
    theme,
    title,
    onPress,
  } = translate(props);

  return (
    <>
      {rightIcon ? (
        <List.Accordion
          title={title}
          left={_ => <List.Icon icon={leftIcon} color={leftIconColor} />}
          right={_ => (
            <List.Icon
              icon={rightIcon}
              color={rightIconColor}
              style={{paddingLeft: 25}}
            />
          )}
          onPress={onPress}
          theme={theme}>
          {children}
        </List.Accordion>
      ) : (
        <List.Accordion
          title={title}
          left={_ => <List.Icon icon={leftIcon} color={leftIconColor} />}
          onPress={onPress}
          theme={theme}>
          {children}
        </List.Accordion>
      )}
    </>
  );
}

export default ListAccordion;
