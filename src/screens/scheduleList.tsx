/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import CalendarSelect from '../components/calendarSelect/calendarSelect';
import CollapsibleComponent from '../components/collapsibleComponent/collapsibleComponent';
import Header from '../components/header/header';
import Icon from '../components/icon/icon';

import themes from '../themes/themes';
import {ScreenProps} from '../utils/types';

function ScheduleList({navigation}: ScreenProps) {
  const onPressBackButton = () => navigation.navigate('Materias');
  const onPressLogo = () => navigation.navigate('Materias');
  const onPressSettings = () => navigation.navigate('Settings');

  const [firstDateSelected, setFirstDateSelected] = useState<string>();
  const [secondDateSelected, setSecondDateSelected] = useState<string>();

  const getFirstDate = (date: string): void => {
    setFirstDateSelected(date);
  };

  const getSecondDate = (date: string): void => {
    setSecondDateSelected(date);
  };

  const onPressAlert = (state: boolean): void => {
    console.log(state);
  };

  const styles = StyleSheet.create({
    containerCalendar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    containerScheduleList: {
      padding: 30,
    },
  });

  return (
    <View>
      <Header
        showBackButton
        onPressBackButton={onPressBackButton}
        onPressLogo={onPressLogo}
      />

      <View style={styles.containerCalendar}>
        <View>
          <Text>Data de inicio:</Text>
          <CalendarSelect
            selectedDate={getFirstDate}
            initialAndFinishDate={{
              initialDate: firstDateSelected,
              finishDate: secondDateSelected,
            }}
          />
        </View>
        <View>
          <Text>Data de fim:</Text>
          <CalendarSelect
            selectedDate={getSecondDate}
            initialAndFinishDate={{
              initialDate: firstDateSelected,
              finishDate: secondDateSelected,
            }}
          />
        </View>
        <Pressable onPressIn={onPressSettings}>
          <Icon
            type="Ionicons"
            name="md-settings-outline"
            size={25}
            color={themes.color.secundary}
          />
        </Pressable>
      </View>

      {/* <View style={styles.containerScheduleList}>
        <CollapsibleComponent
          date="05/02"
          title="Atividade avaliativa"
          onPressAlert={onPressAlert}
        />
      </View> */}
    </View>
  );
}

export default ScheduleList;
