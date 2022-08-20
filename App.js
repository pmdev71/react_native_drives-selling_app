import React from 'react';

import {NativeBaseProvider} from 'native-base';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <NativeBaseProvider>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </NativeBaseProvider>
  );
};

export default App;
