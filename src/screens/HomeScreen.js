import React from 'react';
import PackagesList from '../components/PackagesList';
import {Box, Text} from 'native-base';
import BottomNavbar from '../components/BottomNavbar';

const HomeScreen = ({route, navigation}) => {
  return (
    <Box flex={1}>
      {/* <Text>Hello, {email}</Text>
      <Text>Your password is : {password}</Text> */}
      <PackagesList />
      <BottomNavbar />
    </Box>
  );
};

export default HomeScreen;
