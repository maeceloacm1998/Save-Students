import React from 'react';
import {StatusBar, View} from 'react-native';

import Navigation from './src/routes';

function App() {
  return (
    <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#FFF" />
      <Navigation />
    </View>
  );
}

export default App;
