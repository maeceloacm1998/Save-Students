import React from 'react';
import {StatusBar, View} from 'react-native';

import Navigation from './src/routes';
import themes from './src/themes/themes';

function App() {
  return (
    <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={themes.color.primary.light}
      />
      <Navigation />
    </View>
  );
}

export default App;
