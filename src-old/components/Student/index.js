import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';


function HomeStudent(){
  return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>ÁREA DO ALUNO</Text>
      </View>
  );
};

export default HomeStudent;