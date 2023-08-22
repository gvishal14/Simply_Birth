import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './navigation';

function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000);
  }, [])

  return (
    <RootNavigator />
  );
}

export default App;
