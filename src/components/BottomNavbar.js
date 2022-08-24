import {Box, Text, HStack, Center, Pressable} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavbar = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('0');

  const navHandler = (index, screenName) => {
    setSelected(index);
    navigation.navigate(screenName);
  };

  return (
    <Box
      //   flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      alignSelf="center">
      {/* <Center flex={1}></Center> */}
      <HStack bg="indigo.700" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => navHandler(0, 'HomeScreen')}>
          <Center>
            {/* <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" /> */}
            <IconIonicons name="home" color="white" size={22} />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => navHandler(1, 'OrderHistoryScreen')}>
          <Center>
            {/* <Icon mb="1" name="user" color="red" size="30" /> */}
            <IconFontAwesome name="history" color="white" size={22} />
            <Text color="white" fontSize="12">
              History
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          // onPress={() => navHandler(2,'LoginScreen')}
        >
          <Center>
            {/* <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" /> */}
            <IconFontAwesome name="shopping-cart" color="white" size={22} />
            <Text color="white" fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          //onPress={() => navHandler(3,'LoginScreen')}
        >
          <Center>
            {/* <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" /> */}
            <IconMaterialCommunityIcons
              name="account"
              color="white"
              size={22}
            />
            <Text color="white" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default BottomNavbar;
