import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Header from '../components/header/header';

function SubjectList() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Header />
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

export default SubjectList;
