import React from 'react';
import {View} from 'react-native';

import CalendarSelect from '../components/calendarSelect/calendarSelect';
import Header from '../components/header/header';

import {ScreenProps} from '../utils/types';

function ScheduleList({navigation}: ScreenProps) {
  const backButton = () => navigation.navigate('Materias');
  const logo = () => navigation.navigate('Materias');

  return (
    <View>
      <Header
        showBackButton
        onPressBackButton={backButton}
        onPressLogo={logo}
      />

      <CalendarSelect />
    </View>
  );
}

export default ScheduleList;
