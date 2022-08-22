import React from 'react';
import PackagesList from '../components/PackagesList';
import {Box, Text} from 'native-base';

const HomeScreen = ({route, navigation}) => {
  const email = route.params.email;
  const password = route.params.password;
  return (
    <Box>
      <Text>Hello, {email}</Text>
      <Text>Your password is : {password}</Text>
      <PackagesList />
    </Box>
  );
};

export default HomeScreen;
