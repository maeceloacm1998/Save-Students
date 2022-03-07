/* eslint-disable @typescript-eslint/no-empty-function */
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import {useCollapsible, AnimatedSection} from 'reanimated-collapsible-helpers';

import themes from '../../themes/themes';
import Icon from '../icon/icon';

export type Collapsible = {
  title: string;
  date: string;
  onPressAlert: (state: boolean) => void;
};

const translate = (props: Collapsible) => ({
  title: props.title ? props.title : '',
  date: props.date ? props.date : '',
  onPressAlert: props.onPressAlert ? props.onPressAlert : () => {},
});

function CollapsibleComponent(props: Collapsible) {
  const {date, onPressAlert, title} = translate(props);
  const {animatedHeight, onPress, onLayout, state} = useCollapsible();

  const [statusAlert, setStatusAlert] = useState<boolean>(false);
  const pressStatusButton = () => setStatusAlert(!statusAlert);

  const isCollapsibleActivated = (
    notExpanded: string,
    expanded: string,
  ): string => {
    if (state === 'expanded') {
      return expanded;
    }

    if (state === 'collapsed') {
      return notExpanded;
    }

    return notExpanded;
  };

  const isStatusActivated = (status: boolean): string => {
    if (status) {
      return themes.color.green;
    }

    if (!status) {
      return themes.color.secundary;
    }

    return 'notExpanded';
  };

  const styles = StyleSheet.create({
    container: {
      height: 42,
      backgroundColor: isCollapsibleActivated(
        themes.color.primary.dark,
        themes.color.secundary,
      ),
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    date: {
      fontSize: RFValue(12),
      fontFamily: themes.fonts.roboto.regular,
      color: isCollapsibleActivated(themes.color.black, themes.color.white),
      marginRight: 10,
    },
    title: {
      fontSize: RFValue(16),
      fontFamily: themes.fonts.roboto.medium,
      color: isCollapsibleActivated(themes.color.black, themes.color.white),
    },
    containerSection: {
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: themes.color.primary.dark,
      paddingHorizontal: 15,
      marginTop: 7,
    },
    titleAlert: {
      fontSize: RFValue(14),
      fontFamily: themes.fonts.roboto.medium,
      color: themes.color.black,
      marginRight: 10,
    },
    statusAlert: {
      fontSize: RFValue(14),
      fontFamily: themes.fonts.roboto.medium,
      color: isStatusActivated(statusAlert),
      marginRight: 10,
    },
    pressNotification: {
      backgroundColor: isStatusActivated(statusAlert),
      padding: 8,
      borderRadius: 100,
    },
  });

  useEffect(() => {
    onPressAlert(statusAlert);
  }, [statusAlert]);

  return (
    <>
      <Pressable onPress={onPress} style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Icon
          type="Ionicons"
          name={isCollapsibleActivated('chevron-down', 'chevron-up')}
          size={25}
          color={isCollapsibleActivated(themes.color.gray, themes.color.white)}
        />
      </Pressable>
      <AnimatedSection
        animatedHeight={animatedHeight}
        onLayout={onLayout}
        state={state}>
        <View style={styles.containerSection}>
          <Text style={styles.titleAlert}>
            Ativar alerta:
            <Text style={styles.statusAlert}>
              {statusAlert ? 'ativado' : 'desativado'}
            </Text>
          </Text>

          <Pressable
            onPressIn={pressStatusButton}
            style={styles.pressNotification}>
            <Icon
              type="Ionicons"
              name="ios-notifications-outline"
              size={25}
              color={themes.color.white}
            />
          </Pressable>
        </View>
      </AnimatedSection>
    </>
  );
}

export default CollapsibleComponent;
