import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import CalendarSelect from '../components/calendarSelect/calendarSelect';
import Header from '../components/header/header';
import Icon from '../components/icon/icon';
import themes from '../themes/themes';

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

  const styles = StyleSheet.create({
    containerCalendar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,
    },
  });

  return (
    <View>
      <Header
        showBackButton
        onPressBackButton={backButton}
        onPressLogo={logo}
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
        <Pressable>
          <Icon
            type="Ionicons"
            name="md-settings-outline"
            size={25}
            color={themes.color.secundary}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default ScheduleList;
