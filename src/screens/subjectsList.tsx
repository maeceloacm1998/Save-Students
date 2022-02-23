import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import Header from '../components/header/header';
import PickerSelect from '../components/picker-select/picker-select';
import NotFoundSubjectList from '../components/notFoundSubjectList/notFoundSubsjectList';

import themes from '../themes/themes';

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    selectShiftContainer: {
      height: 96,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
    },
    pickerSelect: {
      width: RFValue(150),
      height: RFValue(37),
      backgroundColor: themes.color.blue.light,
    },
    titleSelectShift: {
      fontSize: RFValue(16),
      lineHeight: 19,
      fontFamily: themes.fonts.roboto.regular,
      color: themes.color.black,
      marginBottom: 5,
    },
    subjectListContainer: {
      flex: 1,
      marginVertical: 10,
      marginHorizontal: 30,
    },
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
    <View style={styles.container}>
      <Header />

      <View style={styles.selectShiftContainer}>
        <View>
          <Text style={styles.titleSelectShift}>Período</Text>
          <PickerSelect
            listPickerItem={array}
            itemSelected={item}
            customStyle={styles.pickerSelect}
          />
        </View>
        <View>
          <Text style={styles.titleSelectShift}>Turno</Text>
          <PickerSelect
            listPickerItem={array}
            itemSelected={item}
            customStyle={styles.pickerSelect}
          />
        </View>
      </View>

      <View style={styles.subjectListContainer}>
        {/* <NotFoundSubjectList /> */}
        <Pressable>
          <View style={styles.cardContainer}>
            <Text style={styles.title}>Algoritmos em grafos</Text>
            <Text style={styles.teacher}>Professor(a): Rothyele </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default SubjectList;
