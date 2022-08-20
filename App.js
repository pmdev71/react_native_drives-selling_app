import React from 'react';

import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

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
        </Stack.Navigator>
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
