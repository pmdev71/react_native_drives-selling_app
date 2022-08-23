import React, {useState} from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Checkbox,
  VStack,
  Input,
  ScrollView,
  Button,
  Badge,
} from 'native-base';
import OrderDetailsConfermation from '../components/OrderDetailsConfermation';

const DetailsPackageScreen = ({route}) => {
  const packageInfo = route.params.packageInfo;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      {/* // <Text> Package ID:{packageInfo._id}</Text>
        // <Text> Package Name:{packageInfo.name}</Text> */}

      <Box alignItems="center" h="100%">
        <Box
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: 'violet.400',
              }}
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'sm',
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5">
              {packageInfo.operator}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {packageInfo.name}
              </Heading>

              <Text
                fontSize="lg"
                backgroundColor="violet.500"
                color="violet.700"
                fontWeight="700"
                ml="-0.5"
                mt="-1">
                {packageInfo.price} Taka
              </Text>
            </Stack>
            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's
              high-tech industry. The city is also known for its parks and
              nightlife. Bengaluru (also called Bangalore) is the center of
              India's high-tech industry. The city is also known for its parks
              and nightlife. Bengaluru (also called Bangalore) is the center of
              India's high-tech industry. The city is also known for its parks
              and nightlife. Bengaluru (also called Bangalore) is the center of
              India's high-tech industry. The city is also known for its
              parksgdf dfyhgf ygfd.
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  {packageInfo.area}
                </Badge>
              </HStack>
              <VStack>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="700">
                  30 Days
                </Text>
              </VStack>
            </HStack>
            <Box alignItems="center">
              <Input
                mt="3"
                placeholder="Enter number"
                w="75%"
                maxWidth="300px"
                onChangeText={e => setPhoneNumber(e)}
              />
            </Box>
            <HStack alignItems="center" justifyContent="center" mt={2}>
              <Checkbox
                value="indigo"
                size="xm"
                colorScheme="indigo"
                defaultIsChecked>
                Agree with Terms and Conditions.
              </Checkbox>
            </HStack>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => setModalVisible(!modalVisible)}

              // onPress={() =>
              //   navigation.navigate('HomeScreen', {
              //     email: email,
              //     password: password,
              //   })
              // }
            >
              Order Now
            </Button>
            {modalVisible && (
              <OrderDetailsConfermation
                packageInfo={packageInfo}
                phoneNumber={phoneNumber}
                modal={modalVisible}
              />
            )}
          </Stack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default DetailsPackageScreen;
