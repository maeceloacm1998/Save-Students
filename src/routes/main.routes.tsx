import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SubjectList from '../screens/subjectsList';
import ScheduleList from '../screens/scheduleList';

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
    </Stack.Navigator>
  );
}

export default MainRoute;
