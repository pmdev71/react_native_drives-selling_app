import React from 'react';
import {Box, Text} from 'native-base';

const DetailsPackageScreen = ({route}) => {
  const packageInfo = route.params.packageInfo;
  return (
    <Box flex={1}>
      <Text> Package ID:{packageInfo._id}</Text>
      <Text> Package Name:{packageInfo.name}</Text>
      <Text> Price:{packageInfo.price}</Text>
    </Box>
  );
};

export default DetailsPackageScreen;
