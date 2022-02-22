import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SubjectList from '../screens/subjectsList';

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tickets"
        component={SubjectList}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainRoute;
