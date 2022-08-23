import React from 'react';

import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsPackageScreen from './src/screens/DetailsPackageScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontSize: 15,
              color: 'red',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: 'LOGIN',
            }}
          />
          <Stack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{
              title: 'REGISTRATION',
            }}
          />

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: 'HOME',
            }}
          />
          <Stack.Screen
            name="DetailsPackageScreen"
            component={DetailsPackageScreen}
            options={{
              title: 'Details Package',
            }}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
            options={{
              title: 'Forgot Password',
            }}
          />
          <Stack.Screen
            name="OrderHistoryScreen"
            component={OrderHistoryScreen}
            options={{
              title: 'Order History',
            }}
          />

          {/* <RegistrationScreen /> */}
          {/* <LoginScreen /> */}
          {/* <DetailsPackageScreen /> */}
          {/* <ForgotPasswordScreen/> */}
          {/* <OrderHistoryScreen /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
