/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import {ref, onValue} from 'firebase/database';
import database from '../services/firebase';

import Header from '../components/header/header';
import PickerSelect, {
  ItemPicker,
} from '../components/picker-select/picker-select';
import NotFoundSubjectList from '../components/notFoundSubjectList/notFoundSubsjectList';
import CardSubjectList from '../components/cardSubjectList/cardSubjectList';

import themes from '../themes/themes';
import {PeriodItemsProps, ScreenProps} from '../utils/types';

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

function SubjectList({navigation}: ScreenProps) {
  const onPressLogo = () => navigation.navigate('Materias');
  const onPressCard = () => navigation.navigate('Cronograma');
  const onPressMenu = () => navigation.navigate('Menu');

  const [periodItems, setPeriodItems] = useState<Array<ItemPicker>>(
    [] as Array<ItemPicker>,
  );
  const [shiftItems, setShiftItems] = useState();

  const periodItemSelected = (value: string) => {
    console.log(value);
  };

  const shiftItemSelected = (value: string) => {
    console.log(value);
  };

  const getPeriodItems = () => {
    const path = ref(database, 'types/period');

    onValue(path, snapshot => {
      const data: Array<PeriodItemsProps> = snapshot.val();

      data.map(item => {
        const newPeriodItems = {
          label: item.translaction,
          value: item.period,
        };

        setPeriodItems(oldValue => [...oldValue, newPeriodItems]);
      });
    });
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
  });

  useEffect(() => {
    getPeriodItems();
  }, []);

  return (
    <View style={styles.container}>
      <Header onPressLogo={onPressLogo} onPressMenu={onPressMenu} />

      <View style={styles.selectShiftContainer}>
        <View>
          <Text style={styles.titleSelectShift}>Período</Text>
          <PickerSelect
            listPickerItem={periodItems}
            itemSelected={periodItemSelected}
            customStyle={styles.pickerSelect}
          />
        </View>
        <View>
          <Text style={styles.titleSelectShift}>Turno</Text>
          <PickerSelect
            listPickerItem={array}
            itemSelected={shiftItemSelected}
            customStyle={styles.pickerSelect}
          />
        </View>
      </View>

      <View style={styles.subjectListContainer}>
        {/* <NotFoundSubjectList /> */}
        <CardSubjectList
          title="Teste title"
          teacher="teste subtitulo"
          onPressCard={onPressCard}
        />
      </View>
    </View>
  );
}

export default SubjectList;
