import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Teste from '../screens/teste';

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tickets"
        component={Teste}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainRoute;
