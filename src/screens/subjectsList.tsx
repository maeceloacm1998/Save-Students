/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector} from 'react-redux';

import {ref, onValue} from 'firebase/database';
import database from '../services/firebase';

import {ApplicationReducer} from '../redux/reducers';

import Header from '../components/header/header';
import PickerSelect, {
  ItemPicker,
} from '../components/picker-select/picker-select';
import NotFoundSubjectList from '../components/notFoundSubjectList/notFoundSubsjectList';
import CardSubjectList from '../components/cardSubjectList/cardSubjectList';

import themes from '../themes/themes';
import {
  PeriodItemsProps,
  ScreenProps,
  SelectedItemsProps,
  ShiftItemsProps,
  SubjectListProps,
} from '../utils/types';

function SubjectList({navigation}: ScreenProps) {
  const onPressLogo = () => navigation.navigate('Materias');
  const onPressCard = (): void => navigation.navigate('Cronograma');
  const onPressMenu = () => navigation.navigate('Menu');

  const [subjectsList, setSubjectsList] = useState<Array<SubjectListProps>>();
  const [periodItems, setPeriodItems] = useState<Array<ItemPicker>>(
    [] as Array<ItemPicker>,
  );
  const [shiftItems, setShiftItems] = useState<Array<ItemPicker>>(
    [] as Array<ItemPicker>,
  );

  const [periodAndShiftSelected, setPeriodAndShiftSelected] =
    useState<SelectedItemsProps>({} as SelectedItemsProps);

  const getPeriodItems = () => {
    const path = ref(database, 'types/period');
    onValue(path, snapshot => {
      const data: Array<PeriodItemsProps> = snapshot.val();
      data.map((item, index) => {
        if (index === 0) {
          const defaultItem = {
            label: 'Selecione',
            value: '',
          };
          setPeriodItems([defaultItem]);
        }
        const newPeriodItems = {
          label: item.translaction,
          value: item.period,
        };
        setPeriodItems(oldValue => [...oldValue, newPeriodItems]);
      });
    });
  };

  const getShiftItems = () => {
    const path = ref(database, 'types/shift');

    onValue(path, snapshot => {
      const data: Array<ShiftItemsProps> = snapshot.val();

      data.map((item, index) => {
        if (index === 0) {
          const defaultItem = {
            label: 'Selecione',
            value: '',
          };

          setShiftItems([defaultItem]);
        }

        const newPeriodItems = {
          label: item.translaction,
          value: item.shift,
        };

        setShiftItems(oldValue => [...oldValue, newPeriodItems]);
      });
    });
  };

  const getSubjectsList = () => {
    const path = ref(
      database,
      `period/${periodAndShiftSelected.period}/${periodAndShiftSelected.shift}`,
    );

    onValue(path, snapshot => {
      const data = snapshot.val();
      setSubjectsList(data);
    });
  };

  const periodItemSelected = (value: string) =>
    setPeriodAndShiftSelected({...periodAndShiftSelected, period: value});

  const shiftItemSelected = (value: string) =>
    setPeriodAndShiftSelected({...periodAndShiftSelected, shift: value});

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
    getShiftItems();
  }, []);

  useEffect(() => {
    getSubjectsList();
  }, [periodAndShiftSelected]);

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
            listPickerItem={shiftItems}
            itemSelected={shiftItemSelected}
            customStyle={styles.pickerSelect}
          />
        </View>
      </View>

      <View style={styles.subjectListContainer}>
        {/* <NotFoundSubjectList /> */}
        <FlatList
          data={subjectsList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardSubjectList
              title={item.name}
              teacher="aqui"
              onPressCard={onPressCard}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{height: 20, width: '100%'}} />
          )}
        />
      </View>
    </View>
  );
}

export default SubjectList;
