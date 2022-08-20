import {View, Text} from 'react-native';
import React from 'react';

const HomeScreen = ({route, navigation}) => {
  const email = route.params.email;
  const password = route.params.password;
  return (
    <View>
      <Text>Hello, {email}</Text>
      <Text>Your password is : {password}</Text>
    </View>
  );
};

export default HomeScreen;
