/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import themes from '../../themes/themes';

type CardSubjectListProps = {
  title: string;
  teacher: string;
  onPressCard: () => void;
};

const translate = (props: CardSubjectListProps) => ({
  title: props.title ? props.title : '',
  teacher: props.teacher ? props.teacher : '',
  onPressCard: props.onPressCard ? props.onPressCard : () => {},
});

function CardSubjectList(props: CardSubjectListProps) {
  const {title, teacher, onPressCard} = translate(props);

  const styles = StyleSheet.create({
    cardContainer: {
      height: 82,
      backgroundColor: themes.color.primary.dark,
      borderRadius: 5,
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: RFValue(16),
      lineHeight: 19,
      fontFamily: themes.fonts.roboto.bold,
      color: themes.color.secundary,
    },
    teacher: {
      fontSize: RFValue(14),
      lineHeight: 19,
      fontFamily: themes.fonts.roboto.regular,
      color: themes.color.black,
    },
  });

  return (
    <Pressable onPressIn={onPressCard}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.teacher}>Professor(a): {teacher}</Text>
      </View>
    </Pressable>
  );
}

export default CardSubjectList;
