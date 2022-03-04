/* eslint-disable import/no-duplicates */
/* eslint-disable array-callback-return */
import React, {useEffect, useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

import {Calendar} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';
import {RFValue} from 'react-native-responsive-fontsize';

import themes from '../../themes/themes';
import Icon from '../icon/icon';

type MarkedDatesType = {
  [key: string]: MarkingProps;
};

function CalendarSelect() {
  const [selectedDates, setSelectedDates] = useState<MarkedDatesType>({});
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const paintSelectedClickDate = (date: string): void => {
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
    paintSelectedClickDate(date);
  };

  const selectedPeriodDate = () => {
    const initialDate = '2022-02-01';
    const finishDate = '2022-03-03';

    const filterIntervalDate = eachDayOfInterval({
      start: new Date(initialDate),
      end: new Date(finishDate),
    })
      .map(item => {
        const isCheck =
          format(item, 'yyyy-MM-dd') === initialDate ||
          format(item, 'yyyy-MM-dd') === finishDate;

        const markedDates = {};
        Object.defineProperty(markedDates, format(item, 'yyyy-MM-dd'), {
          value: {color: isCheck ? '#70d7c7' : '#7eeedd', textColor: 'white'},
          writable: true,
          enumerable: true,
          configurable: true,
        });
        return markedDates;
      })
      .reduce((acc, current) => ({
        ...acc,
        ...current,
      }));

    setSelectedDates(filterIntervalDate);
  };

  useEffect(() => {
    if (showModal) {
      selectedPeriodDate();
      console.log(selectedDates);
    }
  }, [showModal]);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dateContainer: {
      height: RFValue(37),
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
      padding: 10,
      backgroundColor: themes.color.blue.light,
    },
    dateText: {
      fontSize: RFValue(16),
      fontFamily: themes.fonts.roboto.regular,
      color: themes.color.black,
    },
    calendarContainer: {
      flex: 1,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Pressable onPressIn={openModal}>
          <Icon
            type="Ionicons"
            name="ios-calendar-sharp"
            size={25}
            color={themes.color.secundary}
          />
        </Pressable>

        <Pressable onPressIn={openModal} style={styles.dateContainer}>
          <Text style={styles.dateText}>02/05/1998</Text>
        </Pressable>
      </View>

      <Modal animationType="slide" visible={showModal} transparent>
        <Pressable
          style={styles.calendarContainer}
          onPress={() => setShowModal(false)}
        />
        <View>
          <Calendar
            markingType="period"
            markedDates={selectedDates}
            onDayPress={dia => {
              selectDay(dia.dateString);
            }}
          />
        </View>
      </Modal>
    </>
  );
}

export default CalendarSelect;
