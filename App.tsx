import React from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import Navigation from './src/routes';
import themes from './src/themes/themes';

function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={themes.color.ghost_white}
        />
        <Navigation />
      </View>
    </Provider>
  );
}

export default App;
