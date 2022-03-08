import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Header from '../components/header/header';
import themes from '../themes/themes';
import {ScreenProps} from '../utils/types';

function SettingsScreduleList({navigation}: ScreenProps) {
  const onPressBackButton = () => navigation.goBack();
  const onPressLogo = () => navigation.navigate('Materias');

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 30,
      marginVertical: 18,
    },
    containerNotification: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: RFValue(18),
      fontFamily: themes.fonts.roboto.medium,
      color: themes.color.black,
    },
    describe: {
      fontSize: RFValue(15),
      fontFamily: themes.fonts.roboto.medium,
      color: themes.color.black,
    },
  });

  return (
    <View>
      <Header
        showBackButton
        onPressBackButton={onPressBackButton}
        onPressLogo={onPressLogo}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Configuração</Text>
        <View style={styles.containerNotification}>
          <Text style={styles.describe}>Notificação dessa grade</Text>
          <Switch
            trackColor={{
              false: themes.color.gray,
              true: themes.color.secundaryLight,
            }}
            thumbColor={isEnabled ? themes.color.secundary : themes.color.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}

export default SettingsScreduleList;
