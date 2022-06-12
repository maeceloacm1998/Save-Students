import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SubjectList from '../screens/SubjectList';
import ScheduleList from '../screens/scheduleList';
import SettingsScreduleList from '../screens/settingsScheduleList';
import Menu from '../screens/menu';

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Materias"
        component={SubjectList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cronograma"
        component={ScheduleList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreduleList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          gestureDirection: 'horizontal-inverted',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainRoute;
