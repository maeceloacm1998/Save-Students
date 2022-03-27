/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import Header from '../components/header/header';
import PickerSelect, {
  ItemPicker,
} from '../components/picker-select/picker-select';
import NotFoundSubjectList from '../components/notFoundSubjectList/notFoundSubsjectList';
import CardSubjectList from '../components/cardSubjectList/cardSubjectList';

import themes from '../themes/themes';
import {
  requesterFirebase,
  PeriodItemsProps,
  ScreenProps,
  SelectedItemsProps,
  ShiftItemsProps,
  SubjectListProps,
} from '../utils';

function SubjectList({navigation}: ScreenProps) {
  const onPressLogo = () => navigation.navigate('Materias');
  const onPressCard = (): void => navigation.navigate('Cronograma');
  const onPressMenu = () => navigation.navigate('Menu');

  const [initialBackground, setInitialBackground] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingSubjectList, setLoadingSubjectList] = useState<boolean>(false);
  const [subjectsList, setSubjectsList] = useState<Array<SubjectListProps>>();
  const [periodItems, setPeriodItems] = useState<Array<ItemPicker>>(
    [] as Array<ItemPicker>,
  );
  const [shiftItems, setShiftItems] = useState<Array<ItemPicker>>(
    [] as Array<ItemPicker>,
  );
  const [periodAndShiftSelected, setPeriodAndShiftSelected] =
    useState<SelectedItemsProps>({} as SelectedItemsProps);

  const getPeriodItems = async () => {
    const path = 'types/period';

    const response = await requesterFirebase({method: 'GET', path});

    if (response.statusCode === 200) {
      const data: Array<PeriodItemsProps> = response.body;

      data.map((item, index) => {
        const {isEnable, translaction, period} = item;

        if (index === 0) {
          const defaultItem = {
            label: 'Selecione',
            value: '',
          };
          setPeriodItems([defaultItem]);
        }

        if (isEnable) {
          const newPeriodItems = {
            label: translaction,
            value: period,
          };
          setPeriodItems(oldValue => [...oldValue, newPeriodItems]);
        }
      });
    }
  };

  const getShiftItems = async () => {
    const path = 'types/shift';

    const response = await requesterFirebase({method: 'GET', path});

    if (response.statusCode === 200) {
      const data: Array<ShiftItemsProps> = response.body;

      data.map((item, index) => {
        const {isEnable, shift, translaction} = item;

        if (index === 0) {
          const defaultItem = {
            label: 'Selecione',
            value: '',
          };
          setShiftItems([defaultItem]);
        }

        if (isEnable) {
          const newPeriodItems = {
            label: translaction,
            value: shift,
          };
          setShiftItems(oldValue => [...oldValue, newPeriodItems]);
        }
      });
    }
  };

  const getSubjectsList = async () => {
    try {
      setLoadingSubjectList(true);

      const path = `period/${periodAndShiftSelected.period}/${periodAndShiftSelected.shift}`;
      const response = await requesterFirebase({method: 'GET', path});
      if (response.statusCode === 200) {
        if (response.body.length > 0) {
          setLoadingSubjectList(false);
          setInitialBackground(false);
          setSubjectsList(response.body);
        }
      }
    } catch (e) {
      console.log(e.message);
      setSubjectsList([]);
      setInitialBackground(false);
      setLoadingSubjectList(false);
    }
  };

  const loadingData = async () => {
    setLoading(true);
    await getPeriodItems();
    await getShiftItems();
    setLoading(false);
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
    containerAlignCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  useEffect(() => {
    setInitialBackground(true);
    loadingData();
  }, []);

  useEffect(() => {
    if (!periodAndShiftSelected.period || !periodAndShiftSelected.shift) {
      setInitialBackground(true);
    }

    if (periodAndShiftSelected.period && periodAndShiftSelected.shift) {
      getSubjectsList();
    }
  }, [periodAndShiftSelected]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={25} color={themes.color.black} />
      </View>
    );
  }

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
        {initialBackground ? (
          <View style={styles.containerAlignCenter}>
            <NotFoundSubjectList
              type="SELECTITEMS"
              text="Selecione um período e um turno"
            />
          </View>
        ) : loadingSubjectList ? (
          <View style={styles.containerAlignCenter}>
            <ActivityIndicator size={25} color={themes.color.black} />
          </View>
        ) : subjectsList?.length === 0 ? (
          <View style={styles.containerAlignCenter}>
            <NotFoundSubjectList
              type="NOTFOUND"
              text="Nenhuma matéria encontrada nesse periodo"
            />
          </View>
        ) : (
          <FlatList
            data={subjectsList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CardSubjectList
                title={item.name}
                teacher={item.teacher}
                onPressCard={onPressCard}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{height: 20, width: '100%'}} />
            )}
          />
        )}
      </View>
    </View>
  );
}

export default SubjectList;
