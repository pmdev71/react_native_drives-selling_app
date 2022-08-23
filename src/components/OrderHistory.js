import React, {useEffect, useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Spacer,
  FlatList,
  Image,
  Button,
  Icon,
} from 'native-base';
import SchelatonPackage from './SchelatonPackage';
import {useNavigation} from '@react-navigation/native';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const avatarUrl =
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

  useEffect(() => {
    setLoading(true);
    fetch('https://restfulapipm.herokuapp.com/orders', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        setOrders(responseJson);
        setLoading(false);
        //console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <Box flex={1}>
      {loading ? (
        <Box flex={1}>
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
        </Box>
      ) : (
        <Box flex={1}>
          <FlatList
            data={orders}
            renderItem={({item}) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor="coolGray.200"
                pl="5"
                pr="5"
                py="2"
                my="2">
                <HStack space={4} justifyContent="space-between">
                  <Image
                    alt="operator"
                    size="48px"
                    borderRadius="10"
                    source={{
                      uri: avatarUrl,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      bold>
                      {item.userName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      Date:{item.createdAt}
                    </Text>
                  </VStack>
                  <Spacer />
                  <VStack>
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start">
                      {item.paymentStatus}
                    </Text>
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start">
                      {item.orderStatus}
                    </Text>
                    {/* <Button
                      w="20"
                      mt="2"
                      colorScheme="indigo"
                      size="sm"
                      onPress={() =>
                        navigation.navigate('DetailsPackageScreen', {
                          packageInfo: item,
                        })
                      }>
                      Details
                    </Button> */}
                  </VStack>
                </HStack>
              </Box>
            )}
            keyExtractor={item => item._id}
          />
        </Box>
      )}
    </Box>
  );
};

export default OrderHistory;
