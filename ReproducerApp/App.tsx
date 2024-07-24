import {SafeAreaView, ScrollView, TextInput} from 'react-native';
import * as React from 'react';

export default function Application() {
  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets
      style={{backgroundColor: 'white'}}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}>
      <SafeAreaView>
        <TextInput
          style={{backgroundColor: 'red', height: 60, width: '100%'}}
          placeholder="Focus me"
          placeholderTextColor="white"
        />
      </SafeAreaView>
    </ScrollView>
  );
}
