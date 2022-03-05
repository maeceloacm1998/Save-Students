import React, {useState} from 'react';
import {View} from 'react-native';

import CalendarSelect from '../components/calendarSelect/calendarSelect';
import Header from '../components/header/header';

import {ScreenProps} from '../utils/types';

function ScheduleList({navigation}: ScreenProps) {
  const backButton = () => navigation.navigate('Materias');
  const logo = () => navigation.navigate('Materias');

  const [firstDateSelected, setFirstDateSelected] = useState<string>();
  const [secondDateSelected, setSecondDateSelected] = useState<string>();

  const getFirstDate = (date: string) => {
    setFirstDateSelected(date);
  };

  const getSecondDate = (date: string) => {
    setSecondDateSelected(date);
  };

  return (
    <View>
      <Header
        showBackButton
        onPressBackButton={backButton}
        onPressLogo={logo}
      />

      <CalendarSelect
        selectedDate={getFirstDate}
        initialAndFinishDate={{
          initialDate: firstDateSelected,
          finishDate: secondDateSelected,
        }}
      />
      <CalendarSelect
        selectedDate={getSecondDate}
        initialAndFinishDate={{
          initialDate: firstDateSelected,
          finishDate: secondDateSelected,
        }}
      />
    </View>
  );
}

export default ScheduleList;
