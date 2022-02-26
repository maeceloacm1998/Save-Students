/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {View} from 'react-native';

import {Calendar} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';

import Header from '../components/header/header';

import {ScreenProps} from '../utils/types';

type MarkedDatesType = {
  [key: string]: MarkingProps;
};

function ScheduleList({navigation}: ScreenProps) {
  const backButton = () => navigation.navigate('Materias');
  const logo = () => navigation.navigate('Materias');

  const [selectedDates, setSelectedDates] = useState<MarkedDatesType>({});

  const paintSelectedDate = (date: string): void => {
    const markedDates = {};
    Object.defineProperty(markedDates, date, {
      value: {color: '#70d7c7', textColor: 'white'},
      writable: true,
      enumerable: true,
      configurable: true,
    });

    setSelectedDates({...markedDates, ...selectedDates});
  };

  const selectDay = (date: string): void => {
    paintSelectedDate(date);
  };

  return (
    <View>
      <Header
        showBackButton
        onPressBackButton={backButton}
        onPressLogo={logo}
      />

      <Calendar
        markingType="period"
        markedDates={selectedDates}
        onDayPress={dia => {
          selectDay(dia.dateString);
        }}
      />
    </View>
  );
}

export default ScheduleList;
